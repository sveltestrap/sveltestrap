import ChromeDebug from 'chrome-remote-interface';
import chalk from 'chalk';

const isMac = process.platform === 'darwin';

let networkFilter;
let eventFilter;
let recordLogs;

let consoleMessageLog = [];
let networkMessageLog = [];
let dynamicNetworkMessageLog = [];

const severityColors = {
  verbose: (a) => a,
  info: chalk.blue,
  warning: chalk.yellow,
  error: chalk.red
};

const severityIcons = {
  verbose: ' ',
  info: '🛈',
  warning: '⚠',
  error: '⚠'
};

function debugLog(msg) {
  if (process.env.DEBUG && process.env.DEBUG.includes('-cypress-log-to-output')) {
    return;
  }

  log(`[cypress-log-to-output] ${msg}`);
}

function log(msg) {
  return isMac && console.log(msg);
}

function logEntry(params) {
  if (eventFilter && !eventFilter('browser', params.entry)) {
    return;
  }

  const { level, source, text, timestamp, url, lineNumber, stackTrace, args } = params.entry;
  const color = severityColors[level];
  const icon = severityIcons[level];

  const prefix = `[${new Date(timestamp).toISOString()}] ${icon} `;
  const prefixSpacer = ' '.repeat(prefix.length);

  const logMessage = `${prefix}${chalk.bold(level)} (${source}): ${text}`;
  const justLogMessage = `${text}`;

  log(color(logMessage));
  recordLogMessage(justLogMessage);

  const logAdditional = (msg) => {
    const additionalLogMessage = `${prefixSpacer}${msg}`;
    const recordAdditionalLogMessage = msg;

    log(color(additionalLogMessage));
    recordLogMessage(recordAdditionalLogMessage);
  };

  if (url) {
    logAdditional(`${chalk.bold('URL')}: ${url}`);
  }

  if (stackTrace && lineNumber) {
    logAdditional(`Stack trace line number: ${lineNumber}`);
    logAdditional(`Stack trace description: ${stackTrace.description}`);
    logAdditional(`Stack call frames: ${stackTrace.callFrames.join(', ')}`);
  }

  if (args) {
    const logThis = [];

    if (Array.isArray(args)) {
      args.forEach((item) => {
        if (item.value && item.value.toString().indexOf('background') < 0 && item.value.toString().indexOf('color') < 0) {
          logThis.push(item.value.toString());
        }
      });
    }

    logAdditional(logThis.join(' '));
  }
}

function logConsole(params) {
  if (eventFilter && !eventFilter('console', params)) {
    return;
  }

  const { type, args, timestamp } = params;
  const level = type === 'error' ? 'error' : 'verbose';
  const color = severityColors[level];
  const icon = severityIcons[level];

  const prefix = `[${new Date(timestamp).toISOString()}] ${icon} `;
  const prefixSpacer = ' '.repeat(prefix.length);

  const logAdditional = (msg) => {
    const logMessage = `${prefixSpacer}${msg}`;
    const justLogMessage = `${msg}`;
    log(color(logMessage));
    recordLogMessage(justLogMessage);
  };

  if (args) {
    const logThis = [];

    if (Array.isArray(args)) {
      args.forEach((item) => {
        if (item.value && item.value.toString().indexOf('background') < 0 && item.value.toString().indexOf('color') < 0) {
          logThis.push(item.value.toString());
        }
      });
    }

    logAdditional(logThis.join(' '));
  }
}

function install(on, filter, options = {}) {
  eventFilter = filter;
  recordLogs = options.recordLogs;
  on('before:browser:launch', browserLaunchHandler);
}

function recordLogMessage(logMessage) {
  if (recordLogs) {
    consoleMessageLog.push(logMessage);
  }
}

function getLogs() {
  return consoleMessageLog;
}

function clearLogs() {
  consoleMessageLog = [];
}

function isChrome(browser) {
  return browser.family === 'chrome' || ['chrome', 'chromium', 'canary'].includes(browser.name) || (browser.family === 'chromium' && browser.name !== 'electron');
}

function ensureRdpPort(args) {
  const existing = args.find((arg) => arg.slice(0, 23) === '--remote-debugging-port');

  if (existing) {
    return Number(existing.split('=')[1]);
  }

  const port = 40000 + Math.round(Math.random() * 25000);

  args.push(`--remote-debugging-port=${port}`);

  return port;
}

function networkResponse(params) {
  if (networkFilter && !networkFilter(params)) {
    return;
  }

  const msg = `Network: Url: ${params.response.url}, Status: ${params.response.status}, Status text: ${params.response.statusText}`;

  log(msg);

  networkMessageLog.push(msg);
  dynamicNetworkMessageLog.push(msg);
}

function getNetworkLogs() {
  return networkMessageLog;
}

function getCurrentNetworkLogs() {
  return dynamicNetworkMessageLog;
}

function clearNetworkLogs() {
  networkMessageLog = [];
  return networkMessageLog;
}

function clearCurrentNetworkLogs() {
  dynamicNetworkMessageLog = [];
  return dynamicNetworkMessageLog;
}

function browserLaunchHandler(browser = {}, launchOptions, consoleFilter, netFilter, options = {}) {
  eventFilter = consoleFilter;
  networkFilter = netFilter;
  recordLogs = options.recordLogs;

  const args = launchOptions.args || launchOptions;

  if (!isChrome(browser)) {
    return debugLog(`Warning: An unsupported browser family was used, output will not be logged to console: ${browser.family}`);
  }

  const rdp = ensureRdpPort(args);

  debugLog('Attempting to connect to Chrome Debugging Protocol');

  const tryConnect = () => {
    new ChromeDebug({
      port: rdp
    })
      .then((chrome) => {
        debugLog('Connected to Chrome Debugging Protocol');

        chrome.Log.enable();
        chrome.Log.entryAdded(logEntry);

        chrome.Runtime.enable();
        chrome.Runtime.consoleAPICalled(logConsole);

        chrome.Network.enable();
        chrome.Network.responseReceived(networkResponse);

        chrome.on('disconnect', () => debugLog('Chrome Debugging Protocol disconnected'));
      })
      .catch(() => setTimeout(tryConnect, 100));
  };

  tryConnect();

  return launchOptions;
}

export default {
  _ensureRdpPort: ensureRdpPort,
  install,
  browserLaunchHandler,
  getLogs,
  getNetworkLogs,
  getCurrentNetworkLogs,
  clearLogs,
  clearNetworkLogs,
  clearCurrentNetworkLogs
};

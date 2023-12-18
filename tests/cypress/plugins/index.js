import ChromeDebug from './chrome';
import fs from 'fs';

export const setupNodeEvents = (on, config) => {
  on('before:browser:launch', (browser = {}, launchOptions) => {
    launchOptions = ChromeDebug.browserLaunchHandler(
      browser,
      launchOptions,
      () => true,
      (networkResponse) => {
        return networkResponse && networkResponse.response && networkResponse.response.url.startsWith('http');
      },
      {
        recordLogs: true
      }
    );

    // Chrome options: https://peter.sh/experiments/chromium-command-line-switches/#load-extension
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // auto open devtools
      // launchOptions.args.push('--auto-open-devtools-for-tabs')
      // launchOptions.args.push('--disable-gpu');
      // launchOptions.args.push('--purge-memory-button')
      // launchOptions.args.push('--start-maximized');
      // launchOptions.args.push('--disable-frame-rate-limit');
      // launchOptions.args.push('--disable-accelerated-mjpeg-decode');
      // launchOptions.args.push('--disable-accelerated-video-decode');
      // launchOptions.args.push('--disable-accelerated-video-encode');
      // launchOptions.args.push('--disable-direct-composition-video-overlays');
      launchOptions.args.push('--disable-gpu-memory-buffer-video-frames');
      launchOptions.args.push('--disable-video-capture-use-gpu-memory-buffer');
      launchOptions.args.push('--disable-image-animation-resync');
      launchOptions.args.push('--double-buffer-compositing');
      // launchOptions.args.push('--no-experiments')
      // launchOptions.args.push('--incognito')
      launchOptions.args.push('--no-first-run');
      // Don't make LastPass tabs show up ...
      launchOptions.args.push('--disable-component-extensions-with-background-pages');
      launchOptions.args.push('--disable-extensions ');
      // launchOptions.args.push('--passive-listeners-default=documentonlytrue');
      // launchOptions.args.push('--touch-events');
      // launchOptions.args.push('--trace-startup');
      // launchOptions.args.push('--trace-startup-file=/tmp/trace_event.log');
      // launchOptions.args.push('--trace-to-console')
      // launchOptions.args.push('--also-emit-success-logs');
      // launchOptions.args.push('--disable-gpu-sandbox');
      // launchOptions.args.push('--disable-gpu-watchdog');
      // launchOptions.args.push('--dom-automation');
      // launchOptions.args.push('--start-fullscreen');
      // We need to set the user agent in case of headless because certain setups reject requests not having a user agent.
      // When --headed is used/running a user agent is set because an actual browser window is opened. That is not the case
      // for --headless mode. No User Agent is send.
      // Example: "{"status":"1","error":"Invalid request: Rejected by traffic protection","additionalErrorInfo":null,"serverIp":"ads1007.flurry.gq1.yahoo.com","totalAds":0,"section":null,"ads":null}"
      // launchOptions.args.push(
      //   '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36"'
      // );
      // whatever you return here becomes the launchOptions
      // console.log(launchOptions.args); // print all current args
      return launchOptions;
    }

    if (browser.family === 'firefox') {
      // auto open devtools
      // launchOptions.args.push('-devtools')
      return launchOptions;
    }
  });

  on('task', {
    storeConsoleLogs(filename) {
      const consoleLogs = ChromeDebug.getLogs();
      const consoleLogsStr = consoleLogs.join('\n');
      const consoleLogsFilename = `${filename}_console`;

      ChromeDebug.clearLogs();

      fs.appendFile(consoleLogsFilename, consoleLogsStr, 'utf8', (error) => {
        if (error) {
          console.error('Could not write console logs to file.' + error);
        } else {
          console.log('Console logs written successfully to' + consoleLogsFilename);
        }
      });

      return null;
    }
  });

  on('task', {
    getCurrentNetworkLogs() {
      return ChromeDebug.getCurrentNetworkLogs();
    }
  });

  on('task', {
    clearCurrentNetworkLogs() {
      return ChromeDebug.clearCurrentNetworkLogs();
    }
  });

  on('task', {
    storeNetworkLogs(filename) {
      const networkLogs = ChromeDebug.getNetworkLogs();
      const networkLogsStr = networkLogs.join('\n');
      const newtworkLogsFilename = `${filename}_network`;

      ChromeDebug.clearNetworkLogs();

      fs.appendFile(newtworkLogsFilename, networkLogsStr, 'utf8', (error) => {
        if (error) {
          console.error('Could not write network logs to file.' + error);
        } else {
          console.log('Network logs written successfully to' + newtworkLogsFilename);
        }
      });

      return null;
    }
  });

  return config;
};

export default setupNodeEvents;

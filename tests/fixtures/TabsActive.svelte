<script>
  import { TabContent, TabPane } from '../../src';

  export let selected = 'a';
</script>

<TabContent on:tab>
  <TabPane tabId="a" tab="Tab A" active={selected === 'a'}>Pane A</TabPane>
  <TabPane tabId="b" tab="Tab B" active={selected === 'b'}>Pane B</TabPane>
  <TabPane tabId="c" tab="Tab C" active={selected === 'c'}>Pane C</TabPane>
</TabContent>

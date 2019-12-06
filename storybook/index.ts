import { getStorybookUI, configure } from '@storybook/react-native';

// import './rn-addons';

configure(() => {
  require('./stories');
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;

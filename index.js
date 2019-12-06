/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Storybook from './storybook';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Storybook);
// AppRegistry.registerComponent(appName, () => App);

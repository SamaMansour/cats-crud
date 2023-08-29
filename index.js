import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// Register the app
AppRegistry.registerComponent(appName, () => App);

// Start the app for the web
if (window.document) {
  AppRegistry.runApplication(appName, {
    initialProps: {},
    rootTag: document.getElementById('app-root'),
  });
}

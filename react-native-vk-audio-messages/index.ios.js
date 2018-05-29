import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
// import App from './App';
import LoginView from './App/LoginView';

export default class VKAudioMessages extends Component {
  render() {
    return (
      <NavigatorIOS
          initialRoute={{
            component: LoginView,
            title: 'Login',
            passProps: {url: 'https://oauth.vk.com/authorize?client_id=5744830&scope=status,friends,photos,audio,video,docs,notes,pages,wall,groups,notifications,messages&v=5.58&redirect_uri=https://oauth.vk.com/blank.html&display=mobile&response_type=token'}
          }}
          navigationBarHidden={false}
          style={{flex: 1}}
        />
    );
  }
}


AppRegistry.registerComponent('VKAudioMessages', () => VKAudioMessages);

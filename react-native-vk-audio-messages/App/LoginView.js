/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';
import App from './index';

export default class LoginView extends Component {
  constructor() {
    super();
    this.state = {
      access_token: false,
      relog: false,
    };
  }

  login() {
    this.props.navigator.push({
      title: 'Login',
      component: LoginView,
      passProps: {url: 'https://oauth.vk.com/authorize?client_id=3087106&scope=status,friends,photos,audio,video,docs,notes,pages,wall,groups,notifications,messages,market&v=5.58&redirect_uri=https://oauth.vk.com/blank.html&display=mobile&response_type=token'}
    });
  }

  setAuthToken(elem) {
    if (elem.url.indexOf('access_token') > -1 && this.state.relog) {
      this.props.navigator.push({
        title: 'Select dialog',
        component: App,
        rightButtonTitle: 'Logout',
        onRightButtonPress: this.login.bind(this),
        leftButtonTitle: ' ',
        passProps: {
            access_token: elem.url.split('access_token=')[1].split('&')[0]
        }
      });
    };
    if (!this.state.relog) {
      this.setState({relog: true});
    }
  }

  render() {
    return (
      <WebView
        source={{uri: this.props.url}}
        style={{marginTop: 0}}
        onNavigationStateChange={this.setAuthToken.bind(this)}
        bounces={false}
      />
    );
  }
}


AppRegistry.registerComponent('VKAudioMessages', () => VKAudioMessages);

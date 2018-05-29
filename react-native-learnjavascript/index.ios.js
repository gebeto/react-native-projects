import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';

import MainMenu from './Components/MainMenu';
import About from "./Components/About";

export default class learnjsapp extends Component {

  selectMenuItem(e) {
    alert("CLICKED!");
  }

  render() {
    return (
        <NavigatorIOS
          ref="nav"
          initialRoute={{
            component: MainMenu,
            title: 'Меню',
            rightButtonTitle: 'О приложении',
            onRightButtonPress: () => { this.refs.nav.navigator.push({
              component: About,
              title: 'О приложении',
              passProps: {nav: this.refs.nav}
            }); }
          }}
          style={{flex: 1}}

        />
    );
  }
}

const styles = StyleSheet.create({});

AppRegistry.registerComponent('learnjsapp', () => learnjsapp);

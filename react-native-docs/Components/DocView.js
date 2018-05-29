import React, { Component } from 'react';
import {
    Text,
    View,
    WebView,
    StyleSheet,
} from 'react-native';
import webstyle from './webstyle';

export default class DocView extends Component {

  render() {
    return (
      <WebView style={styles.main} 
                source={{html: webstyle.styles + this.props.html}} />
    );
  }

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  }
});


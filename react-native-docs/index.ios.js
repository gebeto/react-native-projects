import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  NavigatorIOS,
  TouchableHighlight,
} from 'react-native';
import SectionItem from './Components/SectionItem'; 
import reactdocs from './Components/reactdocs.json';

export default class reactNativeDocs extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'Sections',
        }}
        style={{flex: 1}}
      />
    );
  }
}

class Main extends Component {
  render() {
    return (
      // <ScrollView style={styles.constainer} scrollEnabled={false}>
        <View style={styles.wrapper}>
          {Object.keys(reactdocs).map((item, index) => {
            return (<SectionItem 
                          nav={this.props.navigator} key={index} 
                          item={item} items={reactdocs[item]}/>);
          })}
        </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    marginTop: 74,
    overflow: 'hidden',
    borderRadius: 3,

    backgroundColor: '#777',
  },
});

AppRegistry.registerComponent('reactNativeDocs', () => reactNativeDocs);

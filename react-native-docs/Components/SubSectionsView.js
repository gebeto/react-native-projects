import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  NavigatorIOS,
  ScrollView,
  Linking,
} from 'react-native';
import DocView from './DocView';

export default class SubSectionsView extends Component {

  _selectSubSection() {
    this.nav.push({
      component: DocView,
      title: this.name,
      passProps: { html: this.html },
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.props.items.map((item, index) => {
          return (
            <TouchableHighlight 
                onPress={this._selectSubSection.bind({nav: this.props.nav, html: item.html, name: item.name})} 
                style={styles.subSection} key={index}>
              <Text style={styles.subSectionTitle}>{item.name}</Text>
            </TouchableHighlight>
        );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#777',
  },
  subSection: {
    flex: 1,
    height: 60,
    backgroundColor: '#3B3738',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1,
  },
  subSectionTitle: {
    color: '#F5FCFF',
    fontWeight: 'bold',
  },
});


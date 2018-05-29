import React, { Component } from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import SubSectionsView from './SubSectionsView';


export default class SectionItem extends Component {
    _selectSection() {
      this.props.nav.push({
        component: SubSectionsView,
        title: this.props.item,
        passProps: { items: this.props.items, nav: this.props.nav },
      });
    }

    render() {
      return (
          <TouchableHighlight onPress={this._selectSection.bind(this)} style={styles.section}>
            <Text style={styles.sectionTitle}>{this.props.item}</Text>
          </TouchableHighlight>
        );
    }
}


const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: '#3B3738',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 1, 
  },
  sectionTitle: {
    color: '#F5FCFF',
    fontWeight: 'bold',
    fontSize: 20,

  },
});

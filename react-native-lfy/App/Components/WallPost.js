import React, { Component } from 'react';
import {
  ScrollView,
  Dimensions,
  StyleSheet,
  Navigator,
  Image,
  Text,
  View,
} from 'react-native';

export default class WallPost extends Component {

  renderImage() {
    let result = [];
    let windowWidth = Dimensions.get('window').width;
    for (let i in this.props.attachments) {
      if (this.props.attachments[i].type === 'photo'){
        let widthChange = (windowWidth - 24) / this.props.attachments[i].photo.width;
        let newHeight = this.props.attachments[i].photo.height * widthChange;
        result.push(<Image style={styles.Img} key={i}
                           source={{uri: this.props.attachments[i].photo.photo_604, height: newHeight}} />);
      }
    }
    return result;
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.Main}>
        <View style={styles.Header}>
          <View style={styles.Avatar} />
          <Text style={styles.Title}>#LFY</Text>
        </View>
        <View style={styles.Body}>
          <Text style={styles.Content}>{this.props.text}</Text>
          {this.renderImage()}
        </View>
      </View>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  Main: {
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 14,
    shadowColor: "#000000",
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    width: Dimensions.get('window').width - 16,
    overflow: 'hidden',
  },
  Header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 64,
    maxHeight: 64,
    // backgroundColor: '#efefef',
    backgroundColor: 'rgba(200, 200, 200, .1)',
  },
  Avatar: {
    width: 50,
    height: 50,
    marginLeft: 8,
    borderRadius: 30,
    backgroundColor: '#B6F601',
  },
  Title: {
    marginLeft: 8,
    fontWeight: 'bold',
  },
  Content: {
    padding: 6,
    textAlign: 'center',
    fontFamily: 'System',
    paddingBottom: 20,
  },
  Img: {
    margin: 6,
    borderRadius: 10,
  },
});

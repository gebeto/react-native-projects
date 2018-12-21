import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Image
} from 'react-native';
import { REQUEST, BING_API } from './api';
import Weather from './Weather';


export default class App extends Component {
  state = {
    data: null,
    inputQuery: 'Украина',
    query: 'Украина',
  }

  onImageSelectClick = () => {
    this.setState((state) => ({
      query: state.inputQuery,
    }));
    REQUEST(this.state.inputQuery).then(res => {
      this.setState((state) => ({
        data: res,
      }));
    });
  }

  componentDidMount() {
    this.onImageSelectClick();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image style={{width: '100%', height: '100%'}} source={{uri: BING_API(this.state.query || 'Ukraine')}} />
        </View>
        <View style={styles.right}>
          <View style={styles.action}>
            <TouchableOpacity onPress={this.onImageSelectClick}>
              <Text style={{color: 'white'}}>Погода</Text>
            </TouchableOpacity>
            <TextInput
              style={{color: '#fff', height: 40, flex: 1, maxWidth: '50%', textAlign: 'center'}}
              placeholder="Type here to translate!"
              onChangeText={(text) => this.setState({inputQuery: text})}
              onEndEditing={this.onImageSelectClick}
              value={this.state.inputQuery}
            />
          </View>
          <Weather data={this.state.data} />
        </View>
        <Image />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  action: {
    flexDirection: 'row',
    backgroundColor: 'black',
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    backgroundColor: '#fff',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    backgroundColor: '#eee',
    flex: 1,
    padding: 10,
  },
});

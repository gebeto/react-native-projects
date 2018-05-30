import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  AlertIOS,
  TouchableOpacity,
} from 'react-native';
import { DOMAIN, API } from './config';

import { Provider } from 'react-redux';
import { store } from './store/';

import ShopsList from './components/ShopsList/';
// import VisitorsChart from './components/VisitorsChart';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <ShopsList />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

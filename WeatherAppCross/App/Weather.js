import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';


export default class Weather extends Component {
  render() {
    const { data, main, query } = this.props;
    return (
      <View style={styles.container}>
        {data ?
          <FlatList
            style={styles.flatList}
            data={[
              {key: '1', title: 'Дата останнього оновлення', data: new Date(data.dt * 1000).toUTCString()},
              {key: '2', title: 'Тиск', data: data.main.pressure + ' мм'},
              {key: '3', title: 'Температура', data: Math.round(data.main.temp - 273.15) + ' Cº'},
              {key: '4', title: 'Максимальна Температура', data: Math.round(data.main.temp_min - 273.15) + ' Cº'},
              {key: '5', title: 'Мінімальна Температура', data: Math.round(data.main.temp_max - 273.15) + ' Cº'},
              {key: '6', title: 'Хмарність', data: data.clouds.all + '%'},
              {key: '7', title: 'Вітер', data: data.wind.speed + ' м/с ' + Math.round(data.wind.deg) + 'º'},
            ]}
            renderItem={({item}) => 
              <View key={item.key} style={styles.listItem}>
                <View style={styles.listItemTitle}>
                  <Text style={styles.listItemTitleText}>{item.title}</Text>
                </View>
                <View style={styles.listItemData}>
                  <Text style={styles.listItemDataText}>{item.data}</Text>
                </View>
              </View>
            }
          />
        : <ActivityIndicator size="large" color="#0000ff" />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatList: {
    flex: 1,
    width: '100%',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 40,
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  listItemTitleText: {
    color: '#333',
  },
  listItemDataText: {
    color: '#333',
  },
});

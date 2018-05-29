import React, { Component } from 'react';
import {
  TouchableHighlight,
  AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Text,
  View,
} from 'react-native';
import WallPost from './components/WallPost';

const screenWidth = Dimensions.get('window').width;

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      title: '#LFY',
      settings: false,
    }
  }

  componentWillMount() {
    // this.animHeight = new Animated.Value(44);
    this.animHeight = new Animated.Value(Dimensions.get('window').height);
  }

  componentDidMount() {
    this.offset = 0;
    this.loadSomePosts(this.offset);
    Animated.sequence([
      Animated.delay(1000),
      Animated.spring(this.animHeight, {
        toValue: 44,
        friction: 20,
        tension: 100,
    })]).start();
  }

  loadSomePosts(offset) {
    fetch('https://api.vk.com/method/wall.get?owner_id=-8020120&offset='+offset+'&fields=photo_604&count=10&v=5.62')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          posts: [...this.state.posts, ...responseJson.response.items],
        });
    });
  }

  _menuBarClick() {
    Animated.spring(this.animHeight, {
      toValue: this.animHeight._value > 44 ? 44 : 300,
      friction: 5
    }).start();
  }

  handleScroll(event) {
    this.setState({title: event.nativeEvent.contentOffset.x});
    if (event.nativeEvent.contentOffset.x > event.nativeEvent.contentSize.width - 800) {
      this.offset += 10;
      this.loadSomePosts(this.offset);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
          <Animated.View style={[styles.menuBar, {height: this.animHeight}]}>
            <Text
              onPress={this._menuBarClick.bind(this)}
              style={styles.menuBarTitle}>{this.state.title}
            </Text>
          </Animated.View>
        <ScrollView bounces={false} style={styles.mainWrapper} onScroll={this.handleScroll.bind(this)}
                    showsHorizontalScrollIndicator={false} 
                    horizontal={true} decelerationRate={0} snapToInterval={screenWidth}>
          {this.state.posts.map((item, index) => {
            return (!item.marked_as_ads) ? <WallPost 
                                  key={index} text={item.text} 
                                  attachments={item.attachments} /> : undefined;
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: 20,
    backgroundColor: '#B6F601',
  },
  menuBar: {
    backgroundColor: '#B6F601',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  menuBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  mainWrapper: {
    flex: 1,
    backgroundColor: 'rgba(200,200,200,.2)',
  },
});

AppRegistry.registerComponent('LFY', () => App);

import React, { Component } from 'react';
import {
	NavigatorIOS,
	TouchableHighlight,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from 'react-native';
import MainMenuItem from './MainMenuItem';

export default class MainMenu extends Component {

	render() {
    const menu = require('../learnjs.json');
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.container}>
						{Object.keys(menu).map((item, index) => {
							return (
								<MainMenuItem key={index} itemTitle={item} nav={this.props.navigator} content={menu[item]}/>
								);
						})}
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// justifyContent: 'space-around',
		// alignItems: 'center',
		// backgroundColor: '#F5FCFF',
		backgroundColor: '#ccc',
	},
});


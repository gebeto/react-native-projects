import React, { Component } from 'react';
import {
	NavigatorIOS,
	TouchableHighlight,
	StyleSheet,
	Linking,
	Text,
	View,
} from 'react-native';


export default class SearchView extends Component {	
	render() {
		return (
			<View style={styles.container}>
				<TouchableHighlight onPress={() => { Linking.openURL('http://vk.com/gebeto'); }}>
					<View style={styles.goto}>
						<Text>Разработчик:</Text>
						<Text>Славік Ничкало</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		alignSelf: 'stretch',
		backgroundColor: '#fff',
	},
	goto: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
		padding: 30,
	},

});


import React, { Component } from 'react';
import {
	NavigatorIOS,
	TouchableHighlight,
	StyleSheet,
	WebView,
	Text,
	View,
} from 'react-native';
import Files from './pages/Files';


export default class SubSubMenuItem extends Component {

	selectMenuItem(e) {
		this.props.nav.push({
			component: WebView,
			title: this.props.item.title,
			passProps: {source: Files[this.props.item.file_url]}
		});
	}

	render() {
		return (
			<TouchableHighlight style={styles.menuItem} underlayColor="#ccc" onPress={this.selectMenuItem.bind(this)}>
				<Text style={styles.itemTitle}>{this.props.item.title}</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	menuItem: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		padding: 18,
		marginBottom: 1,
	},
	itemTitle: {
		fontFamily: 'Arial',
		fontSize: 18,
		textAlign: 'center'
	}
});


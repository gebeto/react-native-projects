import React, { Component } from 'react';
import {
	NavigatorIOS,
	TouchableHighlight,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import SubMenu from './SubMenu';

export default class MainMenuItem extends Component {

	selectMenuItem(e) {
		let cont = this.props.content;
		// alert(this.props.content.map((item, index) => item['title']));
		this.props.nav.push({
			component: SubMenu,
			title: this.props.itemTitle,
			passProps: {menu: cont, nav: this.props.nav}
		});
	}

	render() {
		return (
			<TouchableHighlight style={styles.menuItem} underlayColor="#ccc" onPress={this.selectMenuItem.bind(this)}>
				<Text style={styles.itemTitle}>{this.props.itemTitle}</Text>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	menuItem: {
		alignSelf: 'stretch',
		backgroundColor: '#fff',
		padding: 30,
		// margin: 3,
		marginBottom: 1,
	},
	itemTitle: {
		fontFamily: 'Arial',
		fontSize: 18,
		textAlign: 'center'
	}
});


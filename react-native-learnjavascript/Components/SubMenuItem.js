import React, { Component } from 'react';
import {
	NavigatorIOS,
	TouchableHighlight,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import SubSubMenu from './SubSubMenu';

export default class SubMenuItem extends Component {

	selectMenuItem(e) {
		var cont = this.props.item.content;
		// alert(Object.keys(this.props.item));
		// alert(this.props.content.map((item, index) => item['title']));
		this.props.nav.push({
			component: SubSubMenu,
			title: this.props.item.title,
			passProps: {menu: cont, nav: this.props.nav}
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


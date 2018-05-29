import React, { Component } from 'react';
import {
	NavigatorIOS,
	TouchableHighlight,
	StyleSheet,
	Text,
	View,
	ScrollView,
} from 'react-native';
import SubMenuItem from './SubMenuItem';

export default class SubMenu extends Component {

	render() {
		return (
			<View style={styles.container}>
				<ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
					<View style={styles.container}>
						{Object.keys(this.props.menu).map((item, index) => {
							return (
								<SubMenuItem key={index} nav={this.props.nav} item={this.props.menu[item]}/>
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


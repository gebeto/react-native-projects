import React, { Component } from 'react';
import {
	View,
	Text,
	AlertIOS,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

export default class ShopsListItem extends Component {
	render() {
		return (
			<View>
				<TouchableOpacity style={styles.button} onPress={this.onPress}>
					<Text style={styles.buttonText}>{this.props.id}: {this.props.title}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}


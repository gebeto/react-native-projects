import React, { Component } from 'react';
import {
	View,
	Text,
	Modal,
	TouchableOpacity,
} from 'react-native';
import { styles } from './styles';


export default class VisitorsChart extends React.Component {
	static defaultProps = {
		visible: false,
	}

	render() {
		return (
			<Modal
				animationType="slide"
				transparent={false}
				visible={this.props.visible}
				onRequestClose={() => {
					// alert('Modal has been closed.');
				}}>
				<View style={{marginTop: 22}}>
					<View>
						<Text>Hello World!</Text>

						<TouchableOpacity
							style={{padding: 20}}
							onPress={() => {
								this.setState({
									modalVisible: false
								});
							}}>
							<Text>Hide Modal</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		);
	}
}

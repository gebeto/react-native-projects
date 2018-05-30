import React, { Component } from 'react';
import {
	View,
	Text,
	AlertIOS,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import ShopsListItem from './ShopsListItem/';


export default class ShopsList extends Component {
	componentDidMount() {
		this.props.loadShops();
	}

	render() {
		return (
			<ScrollView style={styles.main}>
				{this.props.shops.map((shop) => 
					<ShopsListItem onSelect={(data) => {}} key={shop.id} title={shop.name} id={shop.id} />
				)}
			</ScrollView>
		);
	}
}
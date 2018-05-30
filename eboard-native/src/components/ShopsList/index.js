import { connect } from 'react-redux';
import ShopsList from './ShopsList';
import { API } from '../../config';


export default connect(
	state => ({
		shops: state.shops,
	}),
	dispatch => ({
		loadShops() {
			API("/prod/api/shops").then(resp => {
				dispatch({type: 'LOAD_SHOPS', payload: resp.response.shops});
			});
		}
	}),
)(ShopsList);
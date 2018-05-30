import { createStore } from 'redux';

const initialState = {
	shops: [],
};

function reducer(state = initialState, action) {
	if (action.type === 'LOAD_SHOPS') {
		return {
			...state,
			shops: action.payload,
		}
	}
	return state;
}


export const store = createStore(reducer);
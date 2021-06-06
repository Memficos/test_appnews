import {
	GET_NEWS_ERROR,
	GET_NEWS_START,
	GET_NEWS_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
	news: [],
	loading: false,
	error: null,
};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NEWS_START:
			return {
				...state,
				loading: true,
			};

		case GET_NEWS_SUCCESS:
			return {
				...state,
				loading: false,
				news: action.payload,
			};

		case GET_NEWS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

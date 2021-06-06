import { AUTH_LOGOUT, AUTH_SUCCESS } from '../actions/actionTypes';

const initialState = {
	token: false,
	user: {
		username: 'Admin',
		password: '12345',
	},
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_SUCCESS:
			return {
				...state,
				token: action.payload,
			};
		case AUTH_LOGOUT:
			return {
				...state,
				token: action.payload,
			};
		default:
			return state;
	}
};

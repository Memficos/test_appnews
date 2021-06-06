import { AUTH_SUCCESS, AUTH_LOGOUT } from "./actionTypes";

export function authSuccess(token) {
	localStorage.setItem('token', token);
	return {
		type: AUTH_SUCCESS,
		payload: token,
	};
}

export function authLogout(token) {
	localStorage.setItem('token', token);
	return {
		type: AUTH_LOGOUT,
		payload: token,
	};
}
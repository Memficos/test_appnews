import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authHelper } from '../../helpers/authHelper';
import { authLogout } from '../../store/actions/authCreator';

export const Profile = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	if (!authHelper()) {
		return <Redirect to={'/login'} />;
	}

	const goToHome = () => {
		history.push('/');
	};

	const onLogout = (e) => {
		e.preventDefault();
		dispatch(authLogout(false));
		goToHome();
	};

	return (
		<div>
			<h2>Это приватная страница профиля</h2>
			<button type="primary" onClick={onLogout}>
				Выйти
			</button>
		</div>
	);
};

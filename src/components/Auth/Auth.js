import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, authSuccess } from '../../store/actions/authCreator';
import './auth.scss';

export const Auth = () => {
	const [value, setValue] = useState({});

	const [active, setActive] = useState(false);

	let history = useHistory();

	const user = useSelector((state) => state.auth.user);

	const dispatch = useDispatch();

	const onChangeFormElements = (event) => {
		setValue((prev) => {
			return {
				...prev,
				[event.target.name]: event.target.value,
			};
		});
	};

	const goToProfile = () => {
		history.push('/profile');
	};

	const onForm = (e) => {
		e.preventDefault();

		if (JSON.stringify(value) === JSON.stringify(user)) {
			dispatch(authSuccess(true));
			goToProfile();
		} else {
			dispatch(authLogout(false));
			setActive(true);
		}
	};

	return (
		<>
			{active ? (
				<div className="alert alert-primary" role="alert">
					Имя пользователя или пароль введены не верно
				</div>
			) : null}
			<form className="form-login">
				<div className="mb-3">
					<label htmlFor="exampleUsername" className="form-label">
						Username
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleUsername"
						name="username"
						placeholder="Введите имя пользователя"
						onChange={onChangeFormElements}
					></input>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						name="password"
						placeholder="Введите пароль"
						onChange={onChangeFormElements}
					></input>
				</div>
				<button type="submit" className="btn btn-primary" onClick={onForm}>
					Вход
				</button>
			</form>
		</>
	);
};

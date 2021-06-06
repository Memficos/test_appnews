import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-primary">
			<div className="navbar-brand">Application</div>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink className="nav-link" to="/" exact>
						Главная
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/news">
						Новости
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" to="/profile">
						Профиль
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

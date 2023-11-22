import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<NavLink to="/">
				<img src="logo_banner.svg" alt="logo" />
			</NavLink>
			<ul>
				<NavLink to="/">
					<li>accueil</li>
				</NavLink>
				<NavLink to="/APropos">
					<li>A Propos</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navigation;

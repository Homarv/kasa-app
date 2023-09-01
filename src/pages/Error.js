import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="alert-error">
			<h1>404</h1>
			<p>Oups! La page que vous demander n'existe pas</p>
			<Link to="/" className="custom-link">
				Retourner à la page d'accueil
			</Link>
		</div>
	);
};

export default Error;

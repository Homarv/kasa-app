import React from "react";
import { Link } from "react-router-dom";

const LogementCard = ({ item }) => {
	return (
		<li className="card" key={item.id}>
			<Link
				to={`/Fiche_Logement/${item.id}`}
				style={{ textDecoration: "none" }}
			>
				<div className="image-container">
					<h2>{item.title}</h2>
					<img src={item.cover} alt={item.title} />
				</div>
			</Link>
		</li>
	);
};

export default LogementCard;

import data from "../data.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Caroussel from "../components/Caroussel";
import Star from "../components//Star";
import Collapse from "../components//Collapse";
import Tag from "../components//Tag";

const FicheLogement = () => {
	// useParams pour obtenir les paramètres de l'URL
	const { id } = useParams();
	const [logement, setLogement] = useState(null);
	const navigate = useNavigate(); // initialisation de useNavigate pour la redirection

	useEffect(() => {
		// Trouver le logement correspondant à l'ID dans les données
		const logementData = data.find((item) => item.id.toString() === id);
		if (logementData) {
			setLogement(logementData);
		} else {
			navigate("/erreur");
			//return null;
		}
	}, [id, navigate]);

	return logement ? (
		<div className="logement_description">
			<Caroussel pictures={logement.pictures} />
			<div className="information">
				<div className="information_title_name">
					<h1>{logement.title}</h1>
					<h2>{logement.location}</h2>
					<Tag tag={logement.tags} />
				</div>
				<div className="container_name_star">
					<div className="information_name">
						<p className="first-name">{logement.host.name.split(" ")[0]}</p>
						<p className="last-name">{logement.host.name.split(" ")[1]}</p>
					</div>
					<Star rating={logement.rating} />
				</div>
			</div>
			<div className="logement_collapse_container">
				<Collapse
					className="collapse--logement"
					title={"Description"}
					description={logement.description}
				/>
				<Collapse
					className="collapse--logement"
					title={"Equipements"}
					description={logement.equipments}
				/>
			</div>
		</div>
	) : null;
};

export default FicheLogement;

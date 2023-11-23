import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Collapse = ({ title, description, className }) => {
	const [isClose, setIsClose] = useState(true);

	return isClose ? (
		<div className={`collapse ${className ? className : ""}`}>
			<div className="collapse_bar">
				<div className="collapse_title">{title}</div>
				<FontAwesomeIcon icon={faChevronUp} onClick={() => setIsClose(false)} />
			</div>
		</div>
	) : (
		<div className={`collapse ${className ? className : ""}`}>
			<div className="collapse_bar">
				<div className="collapse_title">{title}</div>
				<FontAwesomeIcon icon={faChevronDown} onClick={() => setIsClose(true)} />
			</div>
			<div className="collapse_description">
				{Array.isArray(description) ? (
					description.map((item, index) => <p key={index}>{item}</p>)
				) : (
					<p>{description}</p>
				)}
			</div>
		</div>
	);
};

export default Collapse;

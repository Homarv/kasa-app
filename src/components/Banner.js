import React from "react";

const Banner = ({ backgroundClass, title }) => {
	return (
		<div className={`banner ${backgroundClass}`}>
			<h1 className="banner_title">{title}</h1>
		</div>
	);
};

export default Banner;

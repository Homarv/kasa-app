import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Caroussel = ({ pictures }) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const nextSlide = () => {
		setCurrentSlide((currentSlide) => (currentSlide + 1) % pictures.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(currentSlide) => (currentSlide - 1 + pictures.length) % pictures.length
		);
	};

	console.log(pictures.length);
	return (
		<div className="caroussel">
			{pictures.length > 1 && (
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="prev"
					onClick={prevSlide}
				/>
			)}
			<img src={pictures[currentSlide]} alt={`${currentSlide}`} />
			{pictures.length > 1 && (
				<FontAwesomeIcon
					icon={faChevronRight}
					className="next"
					onClick={nextSlide}
				/>
			)}
			{pictures.length > 1 && (
				<div className="count_picture">
					{currentSlide + 1}/{pictures.length}
				</div>
			)}
		</div>
	);
};

export default Caroussel;

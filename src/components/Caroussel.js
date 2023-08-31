import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Caroussel = ({ pictures }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide) => (currentSlide + 1) % pictures.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide) => (currentSlide - 1 + pictures.length) % pictures.length);
    };
    return (
        <div className='caroussel'>
            <FontAwesomeIcon icon={faChevronLeft}className="prev" onClick={prevSlide} />
            <img src={pictures[currentSlide]} alt={`${currentSlide}`} />
            <FontAwesomeIcon icon={faChevronRight} className="next" onClick={nextSlide} />   
            <div className='count_picture'>{currentSlide+1}/{pictures.length}</div>         
        </div>
    );
};

export default Caroussel;
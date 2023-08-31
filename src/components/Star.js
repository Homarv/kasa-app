import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Star = ({rating}) => {
    const rendersStars = () => {
        const stars = [];
    for (let i = 5; i > 0; i--){
        if(rating > 0){
            rating = rating -1
            stars.push(<FontAwesomeIcon icon={faStar} key={i} style={{color: "#FF6060"}} />) 
        }
        else{
            stars.push(<FontAwesomeIcon icon={faStar} key={i} />)
        }
    }
    return stars
};

    return (
        <div>
            {rendersStars()}
        </div>
    );
};

export default Star;
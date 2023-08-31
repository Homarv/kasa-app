import data from '../data.json'; // Importe le fichier JSON ici
import LogementCard from './Logement_card';

const Logements = () => {
    return (
      <div className='logements_container'>
        <ul className='logements'>
          {data.map((item) => (
                  <LogementCard key={item.id} item={item}/>
            ))}
        </ul> 
      </div>
    );
};

export default Logements;
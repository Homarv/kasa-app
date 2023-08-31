import React from 'react';
import Logements from '../components/Logements';
import Banner from '../components/Banner';


const Home = () => {
    return (
        <div>
            <Banner backgroundClass='banner--home' title="Chez vous, partout et ailleurs" />
            <Logements/>
        </div>
    );
};

export default Home;
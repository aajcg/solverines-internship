import React from 'react';
import Hero from '../components/Hero';
import Quote from '../components/Quote';
import Global from '../components/Global';
import Services from '../components/Services';
import Industries from '../components/Industries';
import Counts from '../components/Counts';

const Home = () => {
    return (
        <div>
            <Hero />
            <Quote />
            <Global />
            <Services />
            <Industries />
            <Counts />
        </div>
    );
};

export default Home;
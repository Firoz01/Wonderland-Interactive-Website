import React from 'react';
import Banner from '../Banner/Banner';
import MultipleItems from '../Explore/Explore';
import ThingsToDo from '../ThingsToDo/ThingsToDo';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MultipleItems></MultipleItems>
            <ThingsToDo></ThingsToDo>
        </div>
    );
};

export default Home;
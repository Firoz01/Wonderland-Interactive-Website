import React from 'react';
import './About.css'
const About = () => {
    return (
        <div id='about-section'>
            <div className='about-banner'>
                <h2>about us</h2>
            </div>
            <div className='details-section pt-5'>
                <p>
                Most of the rides and amusements are for the first time in Bangladesh like 5D Cinema Theater, Cable Car, Water Coaster, Tilt-A-Whirl, Ice-Land, Musical Dancing Fountain, Wave pool and so on. This park is specially designed for wholesome family day out amusement and the rides have been carefully chosen so that everybody of the family can take the ride without being scared. Nandan Water Park – “Water World” was inaugurated on May-2004.<br/>
                
                Water Park consists of 08 rides and attractions: Wave Pool, Wave Runner, Ladies & Gents Curve Slides, Kids Pool, Multi Play Zone, Rain Dance, and Waterfall & Mist. At present the park has 28 major attractions.<br/>
                
                The park is spread over 100 Bighas of land and there are plenty of greenery to spend the time in an Eco-friendly and refreshing ambiance.
                </p>
            </div>
            <div class='google-map'>
                <img className='img-fluid w-100 h-75' src="https://static.wpsocket.com/plugin/wpme-google-maps/banner-772x250.jpg" alt="" />
            </div>
        </div>
    );
};

export default About;
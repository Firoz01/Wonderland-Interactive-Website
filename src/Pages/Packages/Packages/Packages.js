import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Package from '../Package/Package'
import './Packages.css'

const Packages = () => {

    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('https://warm-woodland-84420.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    },[])
    console.log(packages);
    return (
        <div id='packages'>

            <div className='packages-banner'>
                <div className='packages-title'>
                    <h1 >All Packages</h1>
                </div>
            </div>

                <div className='packages-container container mt-5'>
                    {
                        packages.map( offer => <Package key={offer._id} offer={offer}></Package>)
                    }
                </div>
           
        </div>
    );
};

export default Packages;


import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Package from '../Package/Package'
import './Packages.css'

const Packages = () => {

    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://warm-woodland-84420.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
        setLoading(true);
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
            
                {loading ?
                packages.map( offer => <Package key={offer._id} offer={offer}></Package>)
                : <Spinner className="spinner" animation="border" variant="danger" />}
                </div>
           
        </div>
    );
};

export default Packages;


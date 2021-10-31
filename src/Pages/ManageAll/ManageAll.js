
import React, { useEffect, useState } from 'react';
import All from '../All/All';
import './ManageAll.css'

const ManageAll = () => {

    const [booked, setBooked] = useState([]);
    
    useEffect(() => {
        fetch('https://warm-woodland-84420.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setBooked(data));
    },[])

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure? Your data won't be store ");
        if (proceed) {
            const url = `https://warm-woodland-84420.herokuapp.com/booked/${id}`;
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingBooked = booked.filter(show => show._id !== id)
                        setBooked(remainingBooked);
                }
            })
        }
    }

    return (
        <div>
            <h2 className='text-success my-4'>Now you can see all Booking Data list: { booked.length}</h2>
            <div className='booking-list my-4 mx-3'>       
                {
                    booked.map(all=><All key={all._id} all={all} handleDelete={handleDelete}></All>)
                }
            </div>
        </div>
    );
};

export default ManageAll;
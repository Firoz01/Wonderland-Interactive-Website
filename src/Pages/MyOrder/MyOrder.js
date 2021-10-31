import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import All from '../All/All';

const MyOrder = () => {

    const { user } = useAuth();
    const [myBookings, setMyBookings] = useState([]);
    
    useEffect(() => {
        fetch('https://warm-woodland-84420.herokuapp.com/booked')
            .then(res => res.json())
            .then(data => setMyBookings(data));
    },[])


    const filter = {
        email: user.email
    }

    const bookings = myBookings.filter(item => {
        for (var key in filter) {
            if (item[key] === undefined || item[key] !== filter[key])
                return false;
        }
        return true;
    })


    const handleDelete = id => {
        const proceed = window.confirm("Are you sure? Your data won't be store");

        if (proceed) {
            const url = `https://warm-woodland-84420.herokuapp.com/booked/${id}`;
            fetch(url, {
                method: 'DELETE'
            }).then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainingMyBookings = myBookings.filter(display=> display._id !== id)
                        setMyBookings(remainingMyBookings);
                }
            })
        }

    }

    return (
        <div>
            <h2 className='text-success my-3'>My Booking Package:
                {bookings.length}</h2>
            <div className='booking-list my-4 mx-3'>
                {
                    bookings.map(booking => <All key={booking._id}
                        all={booking}
                        handleDelete={handleDelete}
                    ></All>)
                }
            </div>
        </div>
    );
};

export default MyOrder;
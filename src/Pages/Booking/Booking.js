import React, { useEffect, useState } from 'react';
import axios from 'axios'
import {useForm} from 'react-hook-form'
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css'


const Booking = () => {
    const [item, setItem] = useState({});
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    console.log(user);

    useEffect(() => {
        fetch(`https://warm-woodland-84420.herokuapp.com/packages/${id}`)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id])
    const { title, image, price } = item;


    const onSubmit = data => {
        axios.post('https://warm-woodland-84420.herokuapp.com/booked', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Booking have been Confirm');
                    reset();
                }
        })
    };

    return (
        <div>
            <div className='d-flex justify-content-center my-4'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
            </Card.Body>
            </Card>
            </div>
            
            <div>
                <p>You booked <span className='text-success'>{item.title }</span>. If you wants to confirm your booked item Please fillup the form and click place confirm</p>
            </div>

            <div className='d-flex justify-content-center align-items-center container'>
                <div>
                    <h2>Please fillup the form</h2>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                    {user.displayName && <input defaultValue={user.displayName} {...register("name")} />}

                    {user.email && <input defaultValue={user.email} {...register("email", { required: true })} />}
                    {errors.email && <span className="error">This field is required</span>}
                    {title && <input  defaultValue={title} {...register("title")} />}
                    {price && <input  defaultValue={price} {...register("price")} />}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
                </div>
                <div>
                    <img className='img-fluid' src="https://thumbs.dreamstime.com/b/cartoon-pointing-hand-drawing-vector-illustration-71830308.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Booking;
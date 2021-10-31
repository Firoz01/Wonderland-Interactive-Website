import axios from 'axios';
import React from 'react';
import {useForm} from 'react-hook-form'
import useAuth from '../../hooks/useAuth';
import './Contact.css'

const Contact = () => {

    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        axios.post('https://warm-woodland-84420.herokuapp.com/massages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Message Sent');
                    reset();
                }
        })
    };

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center container'>
                <div className='my-5 message-box'>
                    <h2 className='text-primary'>Send Your Message</h2>
                <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

                    {user.displayName && <input defaultValue={user.displayName} {...register("name")} />}

                    {user.email && <input defaultValue={user.email} {...register("email", { required: true })} />}
                    {errors.email && <span className="error">This field is required</span>}
                    <textarea placeholder="Type Your Messages" defaultValue="" {...register("massages")} />

                    <input className='massage-button' type="submit" />
                </form>
                </div>
            </div>
            </div>
    );
};

export default Contact;
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddPackages.css'



const AddPackages = () => {

    const { register, handleSubmit, reset } = useForm();


    const onSubmit = data => {
        axios.post('https://warm-woodland-84420.herokuapp.com/packages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Message Sent');
                    reset();
                }
        })
    };

    return (
        <div className='d-flex justify-content-center align-items-center container'>
        <div className='my-5 message-box'>
            <h2 className='text-primary'>Add Packages</h2>
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>

            {<input placeholder='title' {...register("title")} />}

            {<input placeholder='price'  {...register("price", { required: true })} />}
            
            <textarea placeholder="Type Image URL" defaultValue="" {...register("image")} />

            <input className='massage-button' type="submit" />
        </form>
        </div>
    </div>
    );
};

export default AddPackages;
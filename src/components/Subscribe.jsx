import React, { useState } from 'react';
import "/src/assets/css/Subscribe.scss";
import { subscribe } from '../services/services';
import { ToastContainer,toast } from 'react-toastify';

const Subscribe = () => {
    const [email,setEmail] = useState('');
    const handleSubscribe = async() => {
        try {
            if(!email) {
                toast.error('Email is required!');
                return;
            }
            // Regular expression for validating email addresses
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!emailRegex.test(email)) {
                toast.error('Invalid email format!');
                return; // Stop further execution if email format is invalid
            }
            const response = await subscribe({email: email});
            if(response.data.status) {
                toast.success(response.data.message);
            } else {
                toast.warn(response.data.message);
            }
        } catch (error) {

            console.log(error)
        }
    }
    return (
        <div className='subscribe section'>
            <ToastContainer />
            <div className='sectionContainer container'>
                <h2>Subscríbete a nuestra Newsletter y entérate de las últimas novedades</h2>
                <div className="inputDiv flex">
                    <input type="text" placeholder='Ingresa un e-mail' onChange={(e)=>setEmail(e.target.value)} />
                    <button className='btn' onClick={handleSubscribe}>Subscribirse</button>
                </div>
            </div>

        </div>
    )
}

export default Subscribe
import React from 'react';
import img from '../img/Fuad-removebg-preview.png'

const About = () => {
    return (
        <div className='bg-success opacity-10'>
            <div className='d-flex justify-content-around'>
                <div className='mt-5'>
                    <h1 className='text-white'>Hi, I am Fuad</h1>
                    <p></p>
                </div>
                <img className=' img-fluid' src={img} alt="" />

            </div>

        </div>
    );
};

export default About;
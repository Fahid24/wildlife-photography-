import React from 'react';
import img from '../img/Fuad-removebg-preview.png'

const About = () => {
    return (
        <div className='bg-success text-white opacity-10'>
            <div className='container d-flex justify-content-around'>
                <div className='mt-5'>
                    <h1 className='text-white'>Hi, I am Fuad</h1>
                    <p className='fs-3'>
                        I am 19 years old.Few mounths ago I pass HSC exam.Now I prepeard my self for admission test.
                        The first dream is to become a good honest person. Then do something for the
                        country and serve the people.I want to be a developer.I think good developers
                        often have excellent
                        technical skills and write clean, neat code. Their code is frequently well
                        commented and can be easily understood by other team members, allowing it
                        to be easily debugged. This
                        all the quality have to needed for develop my self to be a profetional developer.</p>
                </div>
                <img className=' my-auto img-fluid' src={img} alt="" />

            </div>

        </div>
    );
};

export default About;
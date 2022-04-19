import React from 'react';
import Services from '../Services/Services';
import img from '../img/depositphotos_14779771-stock-photo-portrait-of-confident-young-doctor (1).jpg'


const Home = () => {
    return (

        <>
            <div className='bg-info bg-opacity-10 '>
                <div className='pt-4 row container  mx-auto d-flex justify-content-around'>
                    <div className='img-fluid col-lg-6 col-md-6 col-sm-12 col-12 my-auto '>
                        <img style={{ width: '350px' }} src={img} alt="" />
                        <h4>Hello, I'm </h4>
                        <h1 className='fs-1 text-info lh-0'><span>Abu Hanif Sohel </span></h1>
                        <p>An experienced mathematics teacher who knows the methodology of teaching mathematics in high school.</p>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-12 col-12d-flex justify-content-center align-items-center'>
                        <img style={{ width: '350px' }} src='' alt="" />
                    </div>
                </div >
            </div>

            <div id='services'>
                <Services></Services>
            </div>
        </>

    );
};

export default Home;
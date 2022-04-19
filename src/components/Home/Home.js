import React from 'react';
import Services from '../Services/Services';
import img from '../img/herd-of-zebra-in-lake-manyara-in-tanzanian-national-park-web-header.jpg'


const Home = () => {
    return (

        <>
            <img style={{ width: '100%' }} className='img-fluid' src={img} alt="" />
            <div className='bg-info bg-opacity-10 '>

                <div className='pt-4 row container  mx-auto '>
                    <div className='img-fluid col-lg-6 col-md-6 col-sm-12 col-12 my-auto '>

                        <h4>Hello, I'm </h4>
                        <h1 className='fs-1 text-info lh-0'><span>Fahid Hasan Fuad </span></h1>
                        <p className='fs-4'>I a wildlife photorgapher.Wildlife photography is a genre of photography concerned with documenting various forms of wildlife in their natural habitat.</p>
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
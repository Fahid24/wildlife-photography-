
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const CheckOut = () => {
    const [massege, setMassege] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault();
        setMassege("Thank You For ChakeOut")
    }
    return (
        <div className='container mx-auto  my-5  row mx-autod  d-flex justify-content-center '>
            <div className=' col-sm-12 col-lg-6 border shadow pb-5 px-5 '>
                <h1 className='text-primary text-center'>Please Check</h1>
                <Form onSubmit={handleSubmit} className='mb-2'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="number" placeholder="Your Phone number" required />
                    </Form.Group>
                    <h3 className='my-4 text-center text-danger'>{massege}</h3>
                    <Button variant="primary" type="submit" className='w-100'>
                        Submit
                    </Button>
                </Form>

            </div>

        </div>
    );
};

export default CheckOut;
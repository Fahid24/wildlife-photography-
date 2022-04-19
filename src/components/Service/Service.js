import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, subject, price, img } = service;
    const navigate = useNavigate()
    const handleProceedCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div className='col-xl-4'>
            <Card className=''>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleProceedCheckOut} className="text-primary w-100 text-white">Proceed Check Out</Button>
                </Card.Footer>
            </Card>
        </div>

    );
};

export default Service;
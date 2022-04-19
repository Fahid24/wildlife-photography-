import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, about, price, img } = service;
    const navigate = useNavigate()
    const handleProceedCheckOut = () => {
        navigate('/checkout')
    }
    return (
        <div className='col-xl-4'>
            <Card className='img-fluid'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {about}
                    </Card.Text>
                    <Card.Text>
                        <h4>image pricr: {price}</h4>
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
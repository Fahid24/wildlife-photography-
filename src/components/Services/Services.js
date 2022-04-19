import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const services = [
        { id: '1', name: 'SSC examinee', subject: 'Math & science', days: 'Sat, Mon, Wed, Fri', at: '(7 Am - 9 Am', price: "25000" },
        { id: '2', name: 'ClASS 10', subject: 'Math & science', days: 'Sun, Tues, wed, Fri', at: '8 Am- 10 AM', price: "2000" },
        { id: '3', name: 'ClASS 9', subject: 'Math & science', days: 'Sat Mon, Wed, Fri', at: '3 PM - 5 PM', price: "2000" },
        { id: '4', name: 'CLASS 8', subject: 'Math & Others', days: 'Sun, Mon, Wed, Thu', at: '5 PM - 7 PM', price: "1500" },
        { id: '5', name: 'CLASS 7', subject: 'Math & Others', days: 'Sat, Mon Tues Fri', at: '3 PM -5 PM', price: "1200" },
        { id: '6', name: 'ClASS 6', subject: 'Math & Others', days: 'sun, Tues, Wed, Fri', at: '5 Am - 7 AM', price: "1000" },
    ]
    return (
        <div>
            <h1 className='text-center text-warning'>My Services </h1>
            <CardGroup className='container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </CardGroup>
        </div>
    );
};

export default Services;
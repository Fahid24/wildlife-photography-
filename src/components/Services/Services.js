import React from 'react';
import { CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';
import lion from '../img/lion.jpg';
import deer from '../img/deer.jpg';
import zebra from '../img/zebra.jpg';
import elephant from '../img/Elephant.jpg';
import tortoise from '../img/tortoise.jpg';
import ass from '../img/ass.jpg'

const Services = () => {
    const services = [
        { id: '1', name: 'Lion', img: lion, about: 'The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. ', price: "2.2$" },
        { id: '2', name: 'Deer', img: deer, about: 'Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac.', price: "2$" },
        { id: '3', name: 'Zebra', img: zebra, about: 'Zebras are single-hoofed animals that are native to Africa. Zebras are very closely related to horses and donkeys; in fact, they are in the same genus, Equus. The most prominent feature of zebras is the bold patterns on their coats.', price: "2.5$" },
        { id: '4', name: 'Elephant', img: elephant, about: 'The Asian elephants are the second-largest living land mammal and important for the forest. Elephants are highly intelligent, social and noble animals. ', price: "1$" },
        { id: '5', name: 'Tortoise', img: tortoise, about: '', price: "2$" },
        { id: '6', name: 'Ass', img: ass, about: '', price: "1$" },
    ]
    return (
        <div className='my-5'>
            <h1 className='text-center text-warning'>My Services </h1>
            <CardGroup className='container mx-auto row g-4 text-center d-flex justify-content-center'>
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
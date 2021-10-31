import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Package.css'

const Package = ({offer}) => {
    const {_id,image, title, price } = offer;
    return (
        <div id='package'>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}</Card.Text>
                    <Link to={`/packages/booking/${_id}`}>
                        <Button variant="warning">Book Now</Button>
                    </Link>
            </Card.Body>
            </Card>
        </div>
    );
};

export default Package;

//<Button variant="warning">Book Now</Button>
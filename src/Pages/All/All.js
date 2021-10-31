import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './All.css';

const All = (props) => {
    
    const { _id, name, email, address, phone } = props.all;
    
    const handleDelete = props.handleDelete;
   
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title> OrderId: {_id }</Card.Title>
                    <Card.Text>
                        <p>Name: {name}</p>
                        <p>Email: {email}</p>
                        <p>Address: {address}</p>
                        <p>Phone: {phone}</p>
                    </Card.Text>
                    <Button onClick={() => handleDelete(_id)} variant="danger">Remove</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default All;
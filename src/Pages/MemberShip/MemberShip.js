import React from 'react';
import { Card } from 'react-bootstrap';
import './MemberShip.css'

const MemberShip = () => {
    return (
        <div id='member-ship'>

            <div className='bg-warning banner'>
                <h1>Membership</h1>
            </div>
           
            <div className='details-background'>
                
                <div className='details container py-5'>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='https://nandanpark.com/wp-content/uploads/2020/12/New-7450.png' />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='https://nandanpark.com/wp-content/uploads/2020/12/New-6500.png' />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='https://nandanpark.com/wp-content/uploads/2020/12/New-5500.png' />
                    </Card>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src='https://nandanpark.com/wp-content/uploads/2020/12/New-745.png' />
                    </Card>
                </div>
            </div>

            <div className=' bg-warning get-now'>
                <h2 className='text-white'>Get MemberShip Now!!</h2>
            </div>
            
        </div>
    );
};

export default MemberShip;
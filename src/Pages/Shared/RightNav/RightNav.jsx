import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h2 className='mt-4'>Login With</h2>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with GitHub</Button>
            <div>
                <h3 className='mt-4'>Find us on</h3>
                <ListGroup>
                    <ListGroup.Item disabled> <FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
                <QZone />
            <div>
                <img src={bg} alt="" />
                <h2>Create an Amazing Newspaper</h2>
            </div>
        </div>
    );
};

export default RightNav;
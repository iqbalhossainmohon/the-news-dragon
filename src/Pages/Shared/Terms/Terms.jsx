import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cumque nihil iusto, facilis corrupti at. Officiis libero accusantium maxime quod, ut fugit vero nostrum voluptates molestias natus obcaecati ducimus iste!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
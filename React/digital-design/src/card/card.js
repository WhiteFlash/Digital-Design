import React from 'react';

import '../App';
import AuthorAndComments from '../authorAndComments/authorAndComments';
import './card.css';
import customImage from '../img/one.jpg'


function Card() {
    return (          
    <div className="card ">
        <div className="card-body">
            <h3 className="card-title">Hello world</h3>
            <p className="card-text">Testlndsflnslkdfnk dsflbsjkfdb</p>
            <AuthorAndComments></AuthorAndComments>
        </div>
    </div>
    );
}

export default Card;
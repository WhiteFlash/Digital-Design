import React from 'react';

import '../App';
import AuthorAndComments from '../authorAndComments/authorAndComments';
import './card.css';
import customImage from '../img/one.jpg'


function Card() {
    return (          
    <div className=" ">
        <div className="">
            <h3 className="">Hello world</h3>
            <p className="">Testlndsflnslkdfnk dsflbsjkfdb</p>
            <AuthorAndComments></AuthorAndComments>
        </div>
    </div>
    );
}

export default Card;
import React from 'react';

import '../App';
import AuthorAndComments from '../authorAndComments/authorAndComments';
import './leftCardImage.css';
import customImage from '../img/one.jpg'


function LeftCardImg() {
    return (          
    <div className="" id="total">
        <img className="" src={customImage} alt="Card image" id="pictures"/>
        <div className="">
          <h4 className="">Hello world</h4>
          <p className="">
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer  
          </p>
          <AuthorAndComments></AuthorAndComments>
        </div>
    </div>
    );
}

export default LeftCardImg;
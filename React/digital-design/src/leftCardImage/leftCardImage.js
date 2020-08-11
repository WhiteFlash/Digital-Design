import React from 'react';

import '../App';
import AuthorAndComments from '../authorAndComments/authorAndComments';
import './leftCardImage.css';
import customImage from '../img/one.jpg'


function LeftCardImg() {
    return (          
    <div className="card" id="total">
        <img className="card-img-top" src={customImage} alt="Card image" id="pictures"/>
        <div className="card-body">
          <h4 className="card-title">Hello world</h4>
          <p className="card-text">
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
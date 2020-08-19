import React from 'react';

import './../App';
import AuthorAndComments from '../authorAndComments/authorAndComments'

import './rightimgwithtext.css';
import customImage from '../img/two.jpg';



function Rightimgwithtext() {
    return (   
        <div className="d-flex" id="right">
            <div id="textcenter" >
                <h4 className="">Hello world</h4>
                <p className="">Some example text some example text. John Doe is an architect and engineer</p>         
                <AuthorAndComments></AuthorAndComments>
            </div>
            <div id="cardimage">
                <img className="" src={customImage} alt="Card image" id="picture"/>
            </div>                    
        </div>
    );
}

export default Rightimgwithtext;
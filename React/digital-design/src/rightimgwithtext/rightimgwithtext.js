import React from 'react';

import './../App';
import AuthorAndComments from '../authorAndComments/authorAndComments'

import './rightimgwithtext.css';
import customImage from '../img/two.jpg';



function Rightimgwithtext() {
    return (   
        <div className="row no-gutters" id="whiteBackground">
            <div className="col-lg col-md-12 order-lg-first order-md-last order-sm-last order-xs-last" >
                <h4 className="moveForSpace">Hello world</h4>
                <p className="moveForSpace">Some example text some example text. John Doe is an architect and engineer</p>         
                <AuthorAndComments className="moveForSpace"></AuthorAndComments>
            </div>
            <div className="col-lg col-md-12 order-sm-first">
                <div id="imgRepeater">
                    <img className="img-responsive" src={customImage} alt="Card image" id="pictures"/>
                </div>
            </div>
                    
        </div>
    );
}

export default Rightimgwithtext;
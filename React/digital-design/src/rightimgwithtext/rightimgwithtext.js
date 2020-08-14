import React from 'react';

import './../App';
import AuthorAndComments from '../authorAndComments/authorAndComments'

import './rightimgwithtext.css';
import customImage from '../img/two.jpg';



function Rightimgwithtext() {
    return (   
        <div className="" id="">
            <div className="" >
                <h4 className="">Hello world</h4>
                <p className="">Some example text some example text. John Doe is an architect and engineer</p>         
                <AuthorAndComments className=""></AuthorAndComments>
            </div>
            <div className="">
                <div id="">
                    <img className="" src={customImage} alt="Card image" id="pictures"/>
                </div>
            </div>
                    
        </div>
    );
}

export default Rightimgwithtext;
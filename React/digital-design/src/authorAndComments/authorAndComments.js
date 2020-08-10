import React from 'react';

import '../App';
import './authorAndComments.css';


function AuthorAndComments() {
    return (   
        <div className="row" id="main">
            <div className="col-auto col-xs" id="main">
                <p>Jon Smith</p>
            </div>
            <div className="col-auto col-xs" id="text">
                <p>42 Comments</p>         
            </div>
        </div>  
    );
}

export default AuthorAndComments;
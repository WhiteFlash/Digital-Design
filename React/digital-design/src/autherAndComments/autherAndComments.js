import React from 'react';

import './../App';
import './autherAndComments.css';


function AutherAndComments() {
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

export default AutherAndComments;
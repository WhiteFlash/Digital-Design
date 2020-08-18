import React from 'react';

import '../App';
import './authorAndComments.css';


function AuthorAndComments() {
    return (   
        <div className="d-flex" id="main">
            <p>Jon Smith</p>
            <p>42 Comments</p>         
        </div>  
    );
}

export default AuthorAndComments;
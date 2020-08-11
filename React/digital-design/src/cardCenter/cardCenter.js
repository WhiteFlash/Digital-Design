import React from 'react';

import './../App';
import CardImage from '../img/three.jpg';
import './cardCenter.css';


function CardCenter() {
    return (     
        <div className="card">
            <img className="card-img-top" src={CardImage} alt="Card image"/>
            <div className="card-body">
                <p className="card-text">ome quick example text to build on the card title and make up the bulk of the card's content.</p>       
            </div>
        </div>      
    );
}

export default CardCenter;



      // Experimental
      // <ul>
      //   <li>
      //       <a href="#" >Home</a>
      //   </li>
      //   <li>
      //       <a href="#" >Contacts</a>
      //   </li>
      //   <li>
      //       <a href="#">About me</a>
      //   </li>
      //   <li>
      //       <a href="#" >Partners</a>
      //   </li>
      //   <li od="input">
      //       <input type="text" placeholder="search" />
      //   </li>
      //   <li>
      //       <a href="#">Sign In</a>
      //   </li>
      // </ul> 
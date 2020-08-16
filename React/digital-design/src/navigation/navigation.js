import React from 'react';

import './../App';
import './../CommonAppClasses.css'
import './navigation.css';

function Navigation() {
    return (     
      <div className="d-flex" id="nav">
        <div className="item-nav">
          <a class="" href="#" >Home</a>
        </div>
        <div className="item-nav">
          <a class="" href="#" >Contacts</a>
        </div>
        <div className="item-nav">
          <a class="" href="#" >About Me</a>
        </div>
        <div className="item-nav">
          <a class="" href="#" >Partners</a>
        </div>
        <div className="flex-grow-3 item-nav" id="test">
          <input type="text" className="item-nav flex-grow-3" id="search" />
        </div>
        <div className="item-nav">
          <a class="" href="#" >Sigtn In</a>
        </div>
      </div>      
    );
}


export default Navigation;



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
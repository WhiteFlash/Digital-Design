import React from 'react';

import './../App';
import './navigation.css';


function Navigation() {
    return (     
      <div className="row justify-content-center" id="main">
        <div className="col custom">
          <a class="nav-link " href="#" >Home</a>
        </div>
        <div className="col custom">
          <a class="nav-link " href="#" >Contacts</a>
        </div>
        <div className="col custom">
          <a class="nav-link " href="#" >About Me</a>
        </div>
        <div className="col custom">
          <a class="nav-link " href="#" >Partners</a>
        </div>
        <div className="col-4 col-lg-3" id="test">
          <input type="text" className=""  />
        </div>
        <div className="col custom">
          <a class="nav-link " href="#" >Sigtn In</a>
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
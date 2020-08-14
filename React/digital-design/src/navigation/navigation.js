import React from 'react';

import './../App';
import './navigation.css';

function Navigation() {
    return (     
      <div className="parent" id="">
        <div className="child">
          <a class="" href="#" >Home</a>
        </div>
        <div className="child">
          <a class="" href="#" >Contacts</a>
        </div>
        <div className="child">
          <a class="" href="#" >About Me</a>
        </div>
        <div className="child">
          <a class="" href="#" >Partners</a>
        </div>
        <div className="child" id="test">
          <input type="text" className="child"  />
        </div>
        <div className="child">
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
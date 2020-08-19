import React from 'react';

import '../App';
import AuthorAndComments from '../authorAndComments/authorAndComments';
import './leftCardImage.css';
import customImage from '../img/one.jpg'

// Need to get rid of float: left property from id="total"
// because element that should be straig floats right on the small screen
// function MyFunction(){
//   if(x.matches){
//     x.style.clear = "both";
//   }
// }

// var x = document.getElementById("total").innerHTML;
// x.matchMedia("(max-width: 800px)");
// MyFunction(x);
// x.addEventListener(MyFunction);

function LeftCardImg() {
    return (          
    <div className="d-flex" id="total">
        <img className="d-flex" src={customImage} alt="Card image" id="pictures"/>
        <div className="card-color">
          <h4 className="">Hello world</h4>
          <p className="">
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer
            Some example text some example text. John Doe is an architect and engineer  
          </p>
          <AuthorAndComments></AuthorAndComments>
        </div>
    </div>
    );
}

export default LeftCardImg;
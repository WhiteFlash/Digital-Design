import React from 'react';

import './App.css';
import './CommonAppClasses.css';

import Navigation from './navigation/navigation';
import LeftCardImg from './leftCardImage/leftCardImage';
import Rightimgwithtext from './rightimgwithtext/rightimgwithtext';
import Card from './card/card';
import Cardcenter from './cardCenter/cardCenter';

function App() {
  return (
      <div id="wrapper">
        <div className="d-flex">
          <h2 className="child">Flexbox Layout </h2>
        </div>
        <br></br>    
          <Navigation></Navigation>          
        <br></br>
        <div className="d-wrap">
          <LeftCardImg></LeftCardImg>  
          <Rightimgwithtext></Rightimgwithtext>
        </div>
            
      </div>     
    /* </div>
        <div className="" >
          <div className=" ">   
            <Card></Card>       
            <Card></Card>  
            <Card></Card>       
          </div>  
          <div className="">
            <Cardcenter></Cardcenter>
          </div>
          <div className="">
            <LeftCardImg></LeftCardImg>                  
            <Card></Card>  
            <Card></Card>                 
          </div>
        </div>  */
  );
}

export default App;

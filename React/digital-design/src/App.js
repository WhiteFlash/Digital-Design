import React from 'react';

import './App.css';

import Navigation from './navigation/navigation';
import LeftCardImg from './leftCardImage/leftCardImage';
import Rightimgwithtext from './rightimgwithtext/rightimgwithtext';
import Card from './card/card';
import Cardcenter from './cardCenter/cardCenter';

function App() {
  return (
    <div id="wrapper">
      <div className="container">
        <h2 id="webpagetitle" className=""> Flexbox Layout </h2>
      </div>
      <br></br>
      <div className="container" id="navigation">
        <div className="">
          <div className="" >
            <Navigation></Navigation>
          </div>          
        </div>
        <br></br>
        <div className="">
          <div className="">
            <LeftCardImg></LeftCardImg>
          </div>
          <div className=" ">
            <Rightimgwithtext></Rightimgwithtext>
          </div>
        </div>
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
        </div>
      </div>
    </div>
  );
}

export default App;

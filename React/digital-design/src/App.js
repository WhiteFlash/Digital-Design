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
        <h2 id="webpagetitle" className="col"> Flexbox Layout </h2>
      </div>
      <br></br>
      <div className="container" id="navigation">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12" >
            <Navigation></Navigation>
          </div>          
        </div>
        <br></br>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-11">
            <LeftCardImg></LeftCardImg>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-10">
            <Rightimgwithtext></Rightimgwithtext>
          </div>
        </div>
        <div className="row" >
          <div className="col-lg-4 col-md-6 col-sm-10">   
            <Card></Card>       
            <Card></Card>  
            <Card></Card>       
          </div>  
          <div className="col-lg-5 col-md-4">
            <Cardcenter></Cardcenter>
          </div>
          <div className="col-lg-3 col-md-2">
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

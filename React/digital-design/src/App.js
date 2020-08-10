import React from 'react';

import './App.css';


import Test from './test';
import Navigation from './navigation/navigation';
import LeftCard from './left/left';
import Rightimgwithtext from './rightimgwithtext/rightimgwithtext';


function App() {
  return (
    <div id="wrapper">
      <div className="container">
        <h2 id="webpagetitle" className="col"> Flexbox Layout </h2>
      </div>
      <br></br>
      <div className="container">
        <div className="row">
          <div className="col">
            <Navigation></Navigation>
          </div>          
        </div>
        <br></br>
        <div className="row">
          <div className="col">
            <LeftCard></LeftCard>
          </div>
          <div className="col">
              <Rightimgwithtext></Rightimgwithtext>
          </div>
        </div>
        <div className="row" id="leftdives">
          <div className="col">            
              <p>1-st p</p>              
              <p>2-st p</p>
              <p>3-st p</p>            
          </div>          
        </div>
        <div className="col">
            <p>Test 1</p>
            <p>Test 2</p>
            <p>Test 3</p>
            <Test></Test>
          </div>
      </div>
    </div>
  );
}

export default App;

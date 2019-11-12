import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Cards from './Components/Cards/Cards'
import AddressDelivery from './Components/AddressDelivery/AddressDelivery';
import './App.css';



function App() {
  return (
    <div className="App">
        <Header />
        <div className="App-body">
            <div style={{backgroundColor:"#4b4a52"}}>
                <div className="address">
                    <AddressDelivery/>
                </div>
            </div>
            <div className="TopUsers">
                <div>
                    <h1 style={{paddingLeft:"80px",paddingTop:"50px", color:"white"}}>Top Users in Your Area</h1>
                </div>
                <div  className="bootstrap-override-container">
                    <div className="row">
                        <div class="bootstrap-override-col"> <Cards /></div>
                        <div class="bootstrap-override-col"> <Cards /></div>
                        <div class="bootstrap-override-col"> <Cards /></div>
                    </div>
                </div>
            </div>
            <div className="TopFood">
                <div>
                    <h1 style={{paddingLeft:"80px",paddingTop:"50px", color:"white"}}>Popular Items Near You</h1>
                </div>
                <div  className="bootstrap-override-container">
                    <div className="row">
                        <div class="bootstrap-override-col"> <Cards /></div>
                        <div class="bootstrap-override-col"> <Cards /></div>
                        <div class="bootstrap-override-col"> <Cards /></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

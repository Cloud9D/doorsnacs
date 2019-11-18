import React from 'react';
import Cards from '../../components/Cards/Cards'
import AddressDelivery from '../../components/AdddressDelivery/AddressDelivery';
import './Home.css';

export default class Home extends React.Component{
    render(){
        return (
            <div className="App">
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
                                <div className="bootstrap-override-col"> <Cards /></div>
                                <div className="bootstrap-override-col"> <Cards /></div>
                                <div className="bootstrap-override-col"> <Cards /></div>
                            </div>
                        </div>
                    </div>
                    <div className="TopFood">
                        <div>
                            <h1 style={{paddingLeft:"80px",paddingTop:"50px", color:"white"}}>Popular Items Near You</h1>
                        </div>
                        <div  className="bootstrap-override-container">
                            <div className="row">
                                <div className="bootstrap-override-col"> <Cards /></div>
                                <div className="bootstrap-override-col"> <Cards /></div>
                                <div className="bootstrap-override-col"> <Cards /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
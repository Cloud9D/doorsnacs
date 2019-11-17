import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards'
import AddressDelivery from '../../components/AdddressDelivery/AddressDelivery';

export default class Profile extends React.Component{
    render(){
        return (
            <div className="App">
                <div className="App-body">
                    <div style={{backgroundColor:"#4b4a52"}}>
                        <div className="address">
                            <AddressDelivery/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   
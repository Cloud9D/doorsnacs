
import React, { Component } from 'react';
import RestaurantListings from '../../components/RestaurantListings/RestaurantListings'
import Image from 'react-bootstrap/Image';
import Cards from '../../components/Cards/Cards';
import { resolve } from 'dns';

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        }
    }

    componentDidMount = () => {
    }

    render(){
        let content;
        content = (
            <div className="App">
                <div><RestaurantListings></RestaurantListings></div>
            </div>      
            )
        return content;
    }
}   
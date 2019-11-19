
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

    getApi = () =>{
        fetch('http://localhost:5000/api/restaurant')
            .then(response => response.json())
            .then(response => {
                console.log(response)
                console.log(JSON.stringify(response))
                this.setState({data: JSON.stringify(response)})
                console.log(this.state.data)
            })
    }
    componentDidMount = () => {
        console.log("Did mount");
        this.getApi();
    }

    render(){
        let content;
        content = (
        <div>{this.state.data}</div>
        )
        
        return content;
    }
}   
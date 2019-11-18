/* global gapi */

import React, { Component } from 'react';

import Cards from '../../components/Cards/Cards'
import AddressDelivery from '../../components/AdddressDelivery/AddressDelivery';


export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isAuthing : true,
            isSignedIn: false,
            Name: 'Signed Out'
        }
    }

    enableGoogle = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();
        
        if(googleUser.isSignedIn()){
            this.setState({
                isSignedIn: googleUser.isSignedIn(),
                Name: googleUser.getBasicProfile().getName(),
                isAuthing: false,
            });
        }
        else{
            this.setState({
                isSignedIn: googleUser.isSignedIn(),
                Name: "Signed Out",
                isAuthing: false,
            });
        }

        //console.log(this.state.isAuthing)
        //console.log(googleUser.isSignedIn());
        //console.log(googleUser.getBasicProfile().getId());
    }

    componentDidMount = () => {
        const loadCallback = this.enableGoogle;
        window.gapi.load('auth2', function() {
            gapi.auth2.init({
                client_id: '589768282368-uueqjllnr6vhvekuv58j1oftjo4mvm6f.apps.googleusercontent.com',
              }).then(loadCallback.bind(this));
        });
    }

    render(){
        if(!this.state.isAuthing){
            return(
                <div>{this.state.Name}</div>
            )
        }
        else {return null}
    }
}   
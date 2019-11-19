/* global gapi */

import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Cards from '../../components/Cards/Cards';
import ProfileHold from '../../assets/profile.png'
import './Profile.css';

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isAuthing : true,
            isSignedIn: false,
            Name: ''
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
                Name: "",
                isAuthing: false,
            });
        }
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
        let content;
        if(!this.state.isAuthing){
            if(this.state.isSignedIn){
                content = (
                    <div className="ProfileTop">
                        <div className="Profile-body">
                            <div style={{backgroundColor:"#4b4a52", paddingTop:"50px", paddingBottom:"50px"}}>
                                <div className="IMG">
                                    <div style={{display:"inline-block", paddingRight:"25px"}}>
                                        <Image src={ProfileHold} style={{width:"100px", height:"100px", backgroundColor:"Gray",}} roundedCircle />
                                    </div>
                                    <div style={{display:"inline-block", color:"whitesmoke"}}>
                                        <h2>{this.state.Name}</h2>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                )
            }
            else{
                content = (
                    <div className="ProfileTop">
                        <div className="Profile-body">
                            <div style={{color:"whitesmoke", textAlign:"center"}}>
                                <h1 style={{paddingTop:"20%"}}>Please Sign In and Refresh the Page</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        else {content = null}
        
        return content;
    }
}   
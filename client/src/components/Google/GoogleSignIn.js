/* global gapi */
import React from 'react';
import { Button } from 'react-bootstrap';

export default class GoogleSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isSignedIn: false,
            Name: ''
        }
    }

    signOut = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();

        auth2.signOut().then(function () {
            console.log('User signed out.');
        });

        this.setState({
            isSignedIn: googleUser.isSignedIn(),
            Name: ''
        });
        console.log(this.state.Name)
        window.location.reload();
    }

    onSuccess = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();

        this.setState({
            isSignedIn: googleUser.isSignedIn(),
            Name: googleUser.getBasicProfile().getName(),
            isAuthing: false
        });
        console.log(this.state.isSignedIn);
    }

    componentDidMount() {
        const successCallback = this.onSuccess;
        window.gapi.load('auth2', function() {
            window.gapi.signin2.render('loginButton',{
                width: 200,
                height: 50,
                client_id: '589768282368-uueqjllnr6vhvekuv58j1oftjo4mvm6f.apps.googleusercontent.com',
                onSuccess: successCallback.bind(this)
            });
        })
    }

    render = () => {
        if(!this.state.isSignedIn){
            return (
                <div>
                    <div id="loginButton"/>
                </div>    
            );
        }
        else{
            return (
                <div>
                    <p style={{display:"inline",paddingRight:"20px", fontSize:"20px"}}>Welcome {this.state.Name}</p>
                    <Button variant="outline-dark" onClick={this.signOut.bind(this)}>Sign Out</Button>
                </div>    
            );
        }
    }
  }
/* global gapi */
import React from 'react';

const success = function() {
    console.log("test"); 
  }

export default class GoogleSignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isSignedIn: false, }
    }

    onSuccess() {
        var authInstance = gapi.auth2.getAuthInstance();
        var googleUser = authInstance.currentUser.get();
        var profileId = googleUser.getId();

        var test = gapi.auth2.getAuthInstance().currentUser.get().getId();
        console.log(profileId);
    }
    
    onLoginFailed(err) {
        this.setState({
            isSignedIn: false,
            error: err,
        })
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
        });
    }

    render() {
        return (
            <div>
               <div id="loginButton"/>
            </div>    
        );
    }
  }
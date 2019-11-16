/* global gapi */
import React from 'react';

export default class GoogleSignOut extends React.Component {
    signOut(){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
            console.log('User signed out.');
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.signOut} >Sign Out</button>
            </div>    
        );
    }
  }
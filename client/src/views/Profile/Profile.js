/* global gapi */

import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Cards from '../../components/Cards/Cards';
import ProfileHold from '../../assets/profile.png';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import './Profile.css';

import cart from '../../assets/icons/shopping_cart24px.svg';

export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            isAuthing : true,
            isSignedIn: false,
            Name: '',
            uri: '',
            email: ''
        }
    }

    enableGoogle = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();
        
        if(googleUser.isSignedIn()){
            let profile = googleUser.getBasicProfile();

            this.setState({
                isSignedIn: googleUser.isSignedIn(),
                Name: profile.getName(),
                isAuthing: false,
                uri: profile.getImageUrl(),
                email: profile.getEmail()
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
                    <div className="container mt-3">
                        <div className="row">
                            <Image
                                src={this.state.uri}
                                roundedCircle
                                className="col-2"
                            />
                            <div className="col my-auto">
                                <h2 className="userName">{this.state.Name}</h2>
                                <h4 className="userEmail">{this.state.email}</h4>
                            </div>
                        </div>

                        <div className="mt-5">
                            <div className="mt-3 row space-between">
                            <h1>Your Cart Items <Image src={cart} className="cart-img" /></h1>
                            </div>

                            <div>
                                {/* 
                                    Has to be replaced with a function that iterates through
                                    cart items and produces a <li></li> with the right data
                                */}
                                <ul>
                                    <li className="mt-3 row space-between cart-item">
                                        <p className="cart-item-product">Apples</p>
                                        <p className="cart-item-price">$1.99</p>
                                    </li>

                                    <li className="row space-between cart-item">
                                        <p className="cart-item-product">Apples</p>
                                        <p className="cart-item-price">$1.99</p>
                                    </li>
                                </ul>

                                <div className="mt-3 row space-between">
                                    <h1>Total</h1>
                                    <h1>$3.98</h1>
                                </div>

                                <ButtonToolbar className="space-between mt-1 d-flex flex-row-reverse">
                                    <Button variant="primary" size="lg">Checkout</Button>
                                    <Button variant="outline-danger mr-2" size="lg">Clear</Button>
                                </ButtonToolbar>
                            </div>
                        </div>

                    </div>
                )
            }
            else{
                content = (
                    <h1 className="ml-2 mt-2">Please sign-in and refresh your browser</h1>
                )
            }
        }
        else {content = null}
        
        return content;
    }
}   
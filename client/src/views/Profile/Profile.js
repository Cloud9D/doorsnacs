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
            email: '',
            AccountID: "",
            profileID: "",
            profileList: '',
            currentCart: [],
            totalCost: 0.0
        }
    }

    getCart = () => {
        let auth2 = gapi.auth2.getAuthInstance();
        let googleUser = auth2.currentUser.get();
        let profile = googleUser.getBasicProfile();

        if (googleUser.isSignedIn()) {
            this.setState({accountId: profile.getId().toString()});
            fetch('/api/profile')            
                .then(response => response.json())
                .then(response => {
                    this.setState({profileList: response})

                    var value = this.state.AccountID;
                    var result = this.state.profileList.filter(({ AccountID }) => {
                        return AccountID.includes(value)
                    });
                    this.setState({profileID: result[0]._id, currentCart: result[0].Cart})
                    console.log(this.state.currentCart)
                    for(const element of this.state.currentCart){
                        this.setState({totalCost: this.state.totalCost + element.Price})
                    }
                    this.setState({loaded: true})
                })
        }
    }

    enableGoogle = () => {
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();
        
        if(googleUser.isSignedIn()) {
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

        this.getCart();
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
                    <div className="container mt-3 mb-5">
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
                                <ul>
                                    {
                                        this.state.currentCart.map(item => (
                                            <li className="mt-3 row space-between cart-item">
                                                <p className="cart-item-product">{item.Title}</p>
                                                <p className="cart-item-price">{item.Price}</p>
                                            </li>
                                        ))
                                    }
                                </ul>

                                <div className="mt-3 row space-between">
                                    <h1>Total</h1>
                                    <h1>${this.state.totalCost}</h1>
                                </div>

                                <ButtonToolbar className="space-between mt-1 d-flex flex-row-reverse">
                                    <Button href="cart" variant="primary" size="lg">Go to Cart</Button>
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
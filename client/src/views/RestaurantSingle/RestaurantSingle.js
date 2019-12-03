/* global gapi */

import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class RestaurantSingle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            API: "http://localhost:5000/api/restaurant/" + this.props.userId,
            restaurantSingle: [],
            profileList: [],
            AccountID: "",
            profileID: "",
            currentCart: []
        }
    }

    getApi = () =>{
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();

        fetch(this.state.API)
        .then(response => response.json())
        .then(response => {
            this.setState({restaurantSingle: response})
        })

        if(googleUser.isSignedIn()){
            this.setState({AccountID: googleUser.getBasicProfile().getId().toString()})
            fetch('http://localhost:5000/api/profile')            
                .then(response => response.json())
                .then(response => {
                    this.setState({profileList: response})

                    var value = this.state.AccountID;
                    var result = this.state.profileList.filter(({ AccountID }) => {
                        return AccountID.includes(value)
                    });
                    this.setState({profileID: result[0]._id, currentCart: result[0].Cart})
                    console.log(this.state.currentCart)
                })
        }
    }

    addCart = (item) =>{
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();

        var userProfile = "http://localhost:5000/api/profile/" + this.state.profileID;
        this.state.currentCart.push(item)

        var profile = {
            Cart: this.state.currentCart
        }

        fetch(userProfile,{
            method: "put",
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(profile)
        })
        if(googleUser.isSignedIn()){
            window.alert("Item has been added to your cart")
        }
        else(window.alert("Please sign in first"))
    }

    componentDidMount = () => {
        const loadCallback = this.getApi;
        window.gapi.load('auth2', function() {
            gapi.auth2.init({
                client_id: '589768282368-uueqjllnr6vhvekuv58j1oftjo4mvm6f.apps.googleusercontent.com',
              }).then(loadCallback.bind(this));
        });
    }

    render(){
        if(!this.state.restaurantSingle.itemsForSale){
            return <span>Loading...</span>
        }
        else{
            return(
                <div>
                    <div style={{textAlign:"center", fontSize:"50px"}}>{this.state.restaurantSingle.name}</div>
                    <div className="container-fluid">
                    <div className="row" style={{paddingTop:"15px", paddingLeft:"15px"}}> {
                        this.state.restaurantSingle.itemsForSale.map(item =>
                            <div style={{paddingRight: "30px"}}>    
                                <Card className="text-left" style={{width:'300px'}}>
                                    <Card.Body>
                                        <Card.Img
                                            variant="top"
                                            className="mb-3"
                                            src="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg"
                                        />
                                        <Card.Title>{item.Title}</Card.Title>
                                        <a href="#">
                                            <Button variant="primary" onClick={() => {this.addCart(item)}}>Add to Cart</Button>
                                        </a>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">${item.Price}</Card.Footer>
                                </Card>
                            </div>)
                    }
                    </div>
                    </div>
                </div>
            )
        }
    }
}   

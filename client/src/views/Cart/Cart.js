/* global gapi */

import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class RestaurantSingle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            profileList: [],
            AccountID: "",
            profileID: "",
            currentCart: [],
            totalCost: 0,
            loaded: false
        }
    }

    getApi = () =>{
        var auth2 = gapi.auth2.getAuthInstance();
        var googleUser = auth2.currentUser.get();

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
                    for(const element of this.state.currentCart){
                        this.setState({totalCost: this.state.totalCost + element.Price})
                    }
                    this.setState({loaded: true})
                })
        }
        else{
            window.alert("Please sign in first")
            window.location.replace("/Home")
        }
    }
    
    removeItem = (id) =>{
        var userProfile = "http://localhost:5000/api/profile/" + this.state.profileID;

        const idIndex = (element) => {
            return element._id == id}
        var index = this.state.currentCart.findIndex(idIndex)

        this.state.currentCart.splice(index,1);
        console.log(this.state.currentCart)

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
        window.location.reload();
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
        if(this.state.loaded){
        return(
            <div>
                <div className="container-fluid">
                <div className="row" style={{paddingTop:"15px", paddingLeft:"15px"}}> {
                    this.state.currentCart.map(item =>
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
                                        <Button variant="primary" onClick={() => {this.removeItem(item._id)}}>Remove from cart</Button>
                                    </a>
                                </Card.Body>
                                <Card.Footer className="text-muted">${item.Price}</Card.Footer>
                            </Card>
                        </div>)
                }
                </div>
                </div>
                <div style={{paddingLeft: "20px", paddingTop: "30px"}}>
                    <h2>Total Price {this.state.totalCost}</h2>
                </div>
                <div style={{paddingLeft:"20px", paddingTop:"15px"}}>
                    <Button variant="primary" >Checkout</Button>
                </div>
            </div>        
        )
        }
        else{return(<div></div>)}
    }
}   

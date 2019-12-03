import React from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

import './Home.css';
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: []
        }
    }

    getApi = () =>{
        fetch('http://localhost:5000/api/restaurant')
            .then(response => response.json())
            .then(response => {
                this.setState({restaurantList: response})
                console.log(this.state.restaurantList)

            })
    }
    componentDidMount = () =>{
        this.getApi();

    }
    redirectClick = (id) =>{
        window.location.replace("/Restaurants/" + id);
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron px-5 hero">
                    <div className="row">
                        <h1 className="hero-text">Made at home.<br/>Just not yours.</h1>
                    </div>
                </div>

                <div className="mb-5">
                    <div className="row ml-1 mb-2">
                        <h3>Top Spots in Your Area</h3>
                    </div>
                    <div style={{paddingRight: "30px"}}>
                    <div className="container-fluid">
                        <div className="row" style={{paddingTop:"15px", paddingLeft:"15px"}}> {
                            this.state.restaurantList.map(restaurant =>
                                <div style={{paddingRight: "30px"}}>    
                                    <Card className="text-left" style={{width:'300px'}}>
                                        <Card.Body>
                                            <Card.Img
                                                variant="top"
                                                className="mb-3"
                                                src="https://cdn.pixabay.com/photo/2016/09/13/18/38/silverware-1667988__340.png"
                                            />
                                            <Card.Title>{restaurant.name}</Card.Title>
                                            <Card.Text>{restaurant.description}</Card.Text>
                                            <a href="#">
                                                <Button variant="primary" onClick={() => {this.redirectClick(restaurant._id)}}>Check Me Out</Button>
                                            </a>
                                        </Card.Body>
                                        <Card.Footer className="text-muted">{restaurant.rating}</Card.Footer>
                                    </Card>
                                </div>)
                        }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
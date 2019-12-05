import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class RestaurantListings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: []
        }
    }

    getApi = () =>{
        fetch('/api/restaurant')
            .then(response => response.json())
            .then(response => {
                this.setState({restaurantList: response})
            })
    }

    redirectClick = (id) =>{
        window.location.replace("/Restaurants/" + id);
    }

    componentDidMount = () => {
        this.getApi();
    }

    render(){
        let content;
        content = (
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
        )
        return content;
    }
}   

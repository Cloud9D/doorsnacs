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
        fetch('http://localhost:5000/api/restaurant')
            .then(response => response.json())
            .then(response => {
                this.setState({restaurantList: response})
                console.log(this.state.restaurantList)
            })
    }
    componentDidMount = () => {
        console.log("Did mount");
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
                                    src="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg"
                                />
                                <Card.Title>{restaurant.name}</Card.Title>
                                <Card.Text>{restaurant.description}</Card.Text>
                                <a href="#">
                                    <Button variant="primary">Check Me Out</Button>
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

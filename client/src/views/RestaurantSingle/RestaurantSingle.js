import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

export default class RestaurantSingle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            API: "http://localhost:5000/api/restaurant/" + this.props.userId,
            restaurantList: [],
        }
    }

    getApi = () =>{
        fetch(this.state.API)
            .then(response => response.json())
            .then(response => {
                this.setState({restaurantList: response})
                console.log(this.state.restaurantList)
            })
    }

    componentDidMount = () => {
        console.log("Did Mount Restaurant Single");
        this.getApi()
    }

    render(){
        if(!this.state.restaurantList.itemsForSale){
            return <span>Loading...</span>
        }
        else{
            return(
                <div>
                    <div style={{textAlign:"center", fontSize:"50px"}}>{this.state.restaurantList.name}</div>
                    <div className="container-fluid">
                    <div className="row" style={{paddingTop:"15px", paddingLeft:"15px"}}> {
                        this.state.restaurantList.itemsForSale.map(restaurant =>
                            <div style={{paddingRight: "30px"}}>    
                                <Card className="text-left" style={{width:'300px'}}>
                                    <Card.Body>
                                        <Card.Img
                                            variant="top"
                                            className="mb-3"
                                            src="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg"
                                        />
                                        <Card.Title>{restaurant.Title}</Card.Title>
                                        <a href="#">
                                            <Button variant="primary" onClick={null}>Add to Cart</Button>
                                        </a>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">${restaurant.Price}</Card.Footer>
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

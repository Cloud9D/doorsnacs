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
        let content;
        content = (
            <div>{this.state.restaurantList.name}</div>
        )
        return content;
    }
}   

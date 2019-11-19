import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import logoDad from '../../assets/Dad.png'
import logoMom from '../../assets/Mom.png'


export default class RestaurantListings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            description: null,
            itemsForSale: [],
            //location: {addressLineOne: null, city: null, country: null, state: null, zip: null},
            name: null,

            category1: [],
            description1: null,
            itemsForSale1: [],
            name1: null,

        }
    }

    getApi = () =>{
        fetch('http://localhost:5000/api/restaurant')
            .then(response => response.json())
            .then(response => {
                console.log(response.length)
                console.log(JSON.stringify(response))
                this.setState({
                    category: response[0].category,
                    category1: response[1].category,
                    description: response[0].description,
                    description1: response[1].description,
                    itemsForSale: response[0].itemsForSale,
                    itemsForSale1: response[1].itemsForSale,
                    name: response[0].name,
                    name1: response[1].name,
                })
            })
    }
    componentDidMount = () => {
        console.log("Did mount");
        this.getApi();
    }

    render(){
        let content;
        content = (
            <div style={{paddingTop:"20px"}}>
            <div style={{paddingLeft:"20px", display:"inline-block"}}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={logoDad}/>
                    <Card.Body>
                        <Card.Title>{this.state.name}</Card.Title>
                        <Card.Text>{this.state.description}</Card.Text>
                        <Button variant="dark">Check Me Out</Button>
                    </Card.Body>
                </Card>
            </div>
            <div style={{paddingLeft:"20px", display:"inline-block"}}>
                <Card style={{ width: '18rem'}}>
                    <Card.Img variant="top" src={logoMom} />
                    <Card.Body>
                        <Card.Title>{this.state.name1}</Card.Title>
                        <Card.Text>{this.state.description1}</Card.Text>
                        <Button variant="dark">Check Me Out</Button>
                    </Card.Body>
                </Card>
            </div>
            </div>
        )
        
        return content;
    }
}   

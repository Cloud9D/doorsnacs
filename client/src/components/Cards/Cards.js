import React from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';


export default class Cards extends React.Component{
    render(){
        return(
            <Card className="text-left">
                <Card.Body>
                    {/***************************************************
                      * 
                      * TODO LIST
                      * fetch image from db
                      * fetch description from db
                      * fetch rating from db
                      * fetch dynamic link for restaurant
                      * fetch whether or not it is pickup/delivery only
                      * 
                      **************************************************/}
                    <Card.Img
                        variant="top"
                        className="mb-3"
                        src="https://www.tasteofhome.com/wp-content/uploads/2017/10/exps6498_MRR133247D07_30_5b_WEB-2.jpg"
                    />
                    <Card.Title>Restaurant/Dish Name</Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </Card.Text>
                    <a href="#">
                        <Button variant="primary">Order Now</Button>
                    </a>
                </Card.Body>
                <Card.Footer className="text-muted">4 out of 5</Card.Footer>
            </Card>
        );
    }
} 
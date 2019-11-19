import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleSignIn from '../Google/GoogleSignIn'
import './Header.css';
import logo from '../../assets/logo.png'

export default class Header extends React.Component{

    getRestaurant(){

    }

    render(){
        return (
            <Navbar sticky="top" expand="lg" bg="white">
                <Navbar.Brand>
                    <img
                        alt="doorsnacs logo"
                        src={logo}
                        width="60"
                        height="60"
                    />{' '}
                    DoorSnacs
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="Profile">Profile</Nav.Link>
                        <Nav.Link href="Restaurants">Restaurants</Nav.Link>
                    </Nav>
                    <Form inline className="mr-sm-3">
                        <FormControl
                            type="text"
                            placeholder="Search for Food"
                            className="mr-sm-2"
                        />
                        <Button onChange={this.getRestaurant}>Search</Button>
                    </Form>
                    <GoogleSignIn />
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

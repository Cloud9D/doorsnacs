import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Header.css';
import logo from '../../assets/logo.png'

export default class Header extends React.Component{
    render(){
        return(
            <Navbar sticky="top" className="customNav" expand="lg">
                <Navbar.Brand style={{fontSize: "25px", fontWeight: "bold", paddingRight: "50px"}} className="test" href="#home">
                    <img alt="a" src={logo} width="60" height="50" style={{paddingRight: "10px"}} className="d-inline-block align-center"></img>
                    {"  "}doorsnacs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{fontSize: "17px", paddingRight: "20px"}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{fontSize: "17px", paddingRight: "20px"}} href="#popular">Popular</Nav.Link>
                        <Nav.Link style={{fontSize: "17px"}} href="#profile">Profile</Nav.Link>
                    </Nav>
                    <Form inline style={{paddingRight:""}}>
                        <FormControl style={{paddingRight:"280px", textAlign:"left"}} type="text" placeholder="Search for Food" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                    <Nav style={{paddingLeft:"400px"}}>
                        <Nav.Link style={{fontSize: "17px", paddingRight: "20px"}} href="#signin">Sign In</Nav.Link>
                        <Nav.Link style={{fontSize: "17px"}} href="#signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

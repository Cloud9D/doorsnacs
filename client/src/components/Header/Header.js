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
    render(){
        return(
            <Navbar sticky="top" className="customNav" expand="lg">
                <Navbar.Brand style={{fontSize: "25px", fontWeight: "bold", paddingRight: "50px"}} className="test" href="#home">
                    <img alt="a" src={logo} width="60" height="50" style={{paddingRight: "10px"}} className="d-inline-block align-center"></img>
                    {"  "}doorsnacs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{fontSize: "17px", paddingRight: "20px"}} href="Home">Home</Nav.Link>
                        <Nav.Link style={{fontSize: "17px", paddingRight: "20px"}} href="#popular">Popular</Nav.Link>
                        <Nav.Link style={{fontSize: "17px"}} href="Profile">Profile</Nav.Link>
                    </Nav>
                    <Form inline style={{position: "fixed", left: "35%"}}>
                        <FormControl style={{paddingRight:"280px", textAlign:"left"}} type="text" placeholder="Search for Food" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                        <div style={{paddingLeft:"30px"}}><GoogleSignIn></GoogleSignIn></div>
                    </Form>

                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

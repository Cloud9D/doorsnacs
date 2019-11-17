import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleSignIn from '../Google/GoogleSignIn'
import GoogleSignOut from '../Google/GoogleSignOut'
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
                    <Form inline style={{paddingRight:"300px"}}>
                        <FormControl style={{paddingRight:"280px", textAlign:"left"}} type="text" placeholder="Search for Food" className="mr-sm-2" />
                        <Button variant="outline-dark">Search</Button>
                    </Form>
                    <Nav style={{paddingRight:"10px"}}>
                        <div style={{paddingRight:"15px"}}><GoogleSignIn></GoogleSignIn></div>
                        <div style={{paddingTop:"8px"}}><GoogleSignOut ></GoogleSignOut></div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

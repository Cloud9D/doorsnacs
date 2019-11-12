
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './customNav.css';


export default class Header extends React.Component{
    render(){
        return(
            <Navbar sticky="top" className="customNav" expand="lg">
                <Navbar.Brand style={{fontSize: "22px", fontWeight: "bold", paddingRight: "50px"}} className="test" href="#home">
                    <img alt="a" src="/logo.svg" width="80" height="30" className="d-inline-block align-center"></img>
                    {"  "}doorsnacs</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link style={{fontSize: "17px",paddingRight: "20px"}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{fontSize: "17px"}} href="#link">Popular</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search for Food" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
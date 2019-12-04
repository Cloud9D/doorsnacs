import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import GoogleSignIn from '../Google/GoogleSignIn'
import './Header.css';
import logo from '../../assets/logo.png'
import cart from '../../assets/cart.png'

export default class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [],
            filteredList: [],
            searchName: "",
            itemList: []
        }
    }

    getApi = () =>{
        fetch('/api/restaurant')
            .then(response => response.json())
            .then(response => {
                this.setState({restaurantList: response})
            })
    }
    
    searchApi = (value) =>{
        var results = this.state.restaurantList.filter(({ name }) => {
            return name.toLowerCase().includes(value.toLowerCase());
        });
        if(value == ""){results = []}
        console.log(results);
        this.setState({filteredList: results})
    }

    redirectClick = (id) =>{
        window.location.replace("/Restaurants/" + id);
    }

    componentDidMount = () => {
        console.log("Did Mount Search");
        this.getApi();
    }

    render(){
        return (
            <Navbar sticky="top" expand="lg" bg="white" style={{height:"80px"}}>
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
                        <Nav.Link href="/Home">Home</Nav.Link>
                        <Nav.Link href="/Profile">Profile</Nav.Link>
                        <Nav.Link href="/Restaurants">Restaurants</Nav.Link>
                    </Nav>
                    <div>
                        <Form inline className="mr-sm-3">
                            <Form.Control
                                type="text"
                                placeholder="Search for Restaurants"
                                className="mr-sm-2"
                                onChange={event => {
                                    if(event.target.value.length > 0){
                                        this.searchApi(event.target.value)
                                    }
                                    else this.searchApi("")
                                }
                                }
                                style={{width:"300px"}}/>
                            <Button>Search</Button>
                        </Form>
                        <div style={{position:"fixed"}}>{this.state.filteredList.map(list => 
                            <div className="listConatainer">
                                <ul className="listing">
                                    <li onClick={() => {this.redirectClick(list._id)}} className="listElements">{list.name}</li>
                                </ul>
                            </div>)}
                        </div>
                    </div>
                    <GoogleSignIn />
                    <div style={{paddingLeft:"10px"}}><a href="/Cart"><img style={{width:"30px", height:"30px"}} src={cart}/></a></div>
                    
                </Navbar.Collapse>
            </Navbar>
        );
    }
} 

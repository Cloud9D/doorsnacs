import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './AddressDelivery.css';


export default class AddressDelivery extends React.Component{
    render(){
        return(
            <Form inline>
                <Form.Control
                    type="address"
                    placeholder="Enter your address"
                />
                <Button className="ml-sm-2">Find Food</Button>
            </Form>
        );
    }
} 
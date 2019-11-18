import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import './AddressDelivery.css';


export default class AddressDelivery extends React.Component{
    render(){
        return(
            <Form inline>
                <FormControl style={{paddingLeft:"150px",paddingRight:"150px" ,textAlign:"center"}} type="text" placeholder="Enter Delivery Address" className="mr-sm-2" />
                <div className="testing"><Button variant="outline-success">GO</Button></div>
            </Form>
        );
    }
} 
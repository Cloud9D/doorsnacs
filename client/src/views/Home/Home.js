import React from 'react';
import Cards from '../../components/Cards/Cards'
import AddressDelivery from '../../components/AdddressDelivery/AddressDelivery';
import './Home.css';
export default class Home extends React.Component{
    render() {
        return (
            <div className="container">
                <div className="jumbotron px-5 hero">
                    <div className="row">
                        <h1 className="hero-text">Made at home.<br/>Just not yours.</h1>
                    </div>
                    <div className="row"><AddressDelivery /></div>
                </div>

                <div className="mb-5">
                    <div className="row ml-1 mb-2">
                        <h3>Top Spots in Your Area</h3>
                    </div>
                    <div className="row">
                        <div className="col mb-3"><Cards /></div>
                        <div className="col mb-3"><Cards /></div>
                        <div className="col mb-3"><Cards /></div>
                    </div>
                </div>

                <div className="mb-5">
                    <div className="row ml-1 mb-2">
                        <h3>Popular Items Near You</h3>
                    </div>
                    <div className="row">
                        <div className="col mb-3"><Cards /></div>
                        <div className="col mb-3"><Cards /></div>
                        <div className="col mb-3"><Cards /></div>
                    </div>
                </div>
            </div>
        );
    }
}
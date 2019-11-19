import React from 'react';

export default class RestaurantListings extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            description: null,
            itemsForSale: [],
            //location: {addressLineOne: null, city: null, country: null, state: null, zip: null},
            name: null,
        }
    }

    getApi = () =>{
        fetch('http://localhost:5000/api/restaurant')
            .then(response => response.json())
            .then(response => {
                console.log(response.length)
                console.log(JSON.stringify(response))
                this.setState({
                    category: response[0].category,
                    description: response[0].description,
                    itemsForSale: response[0].itemsForSale,
                    name: response[0].name,
                })
            })
    }
    componentDidMount = () => {
        console.log("Did mount");
        this.getApi();
    }

    render(){
        let content;
        content = (
            <div>{this.state.category}</div>
        )
        
        return content;
    }
}   

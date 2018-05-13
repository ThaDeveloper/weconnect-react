import React, { Component } from 'react';
import BusinessItem from './BusinessItem'
import '../main.css';

export default class Businesses extends Component {
    state = {
        businesses: []
    }

    componentWillMount() {
        this.getBusinesses();
    }

    getBusinesses = async () => {
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/app-weconnect.herokuapp.com/api/v2/businesses/?limit=10`);
        const data = await api_call.json();
        this.setState({
            businesses: data.businesses
        });
    }
    render() {
        const { businesses } = this.state;
        const business = businesses.map(business =>
          <BusinessItem business={business} key={business.id}/> 
        );
     
        return (
            <div className="panel-body">
                <div className="main">
                    { business }
                </div>
            </div>
        );
    }
}
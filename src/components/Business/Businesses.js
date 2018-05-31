import React, { Component } from 'react';
import BusinessItem from './BusinessItem'
import BASE_URL from '../../utils/url.js';
import SearchForm from './SearchForm';
import RegisterBusiness from './RegisterBusiness';

export default class Businesses extends Component {
    state = {
        businesses: [],
        search: ''
    }

    componentWillMount() {
        this.getBusinesses();
    }

    getBusinesses = async () => {
        const api_call = await fetch(`${BASE_URL}/businesses/?limit=10`);
        const data = await api_call.json();
        this.setState({
            businesses: data.businesses
        });
    }
    searchBusinesses = async (e) => {
    	e.preventDefault();
    	const search =  e.target.elements.search.value;
    	const api_call = await fetch(`${BASE_URL}/businesses/?category=${search}&limit=10`);
    	const data = await api_call.json();
    	this.setState({
    		businesses: data.businesses,
    		search: ''
    	});
    }
    render() {
        console.log(this.state.businesses)
        const { businesses } = this.state;
        const business = businesses.map(business =>
          <BusinessItem business={business} key={business.id}/> 
        );
     
        return (
            <div>
                <div className="title">
                    <div className="row">
                        <div className="col-md-4"> 
                            <label>Busines Profiles</label>
                        </div>
                        <div className="col-md-4">
                            <SearchForm searchBusinesses ={this.searchBusinesses} />
                        </div>
                       <RegisterBusiness />
                    </div>
                </div>
                <div className="panel-body">
                    <div className="main">
                        { business }
                    </div>
                </div>
            </div>
        );
    }
}
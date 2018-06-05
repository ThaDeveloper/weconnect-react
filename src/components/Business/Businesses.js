import React, { Component } from 'react';
import BusinessItem from './BusinessItem'
import BASE_URL from '../../utils/url.js';
import SearchForm from './SearchForm';
import RegisterBusiness from './RegisterBusiness';
import Error from './Error';

export default class Businesses extends Component {
    state = {
        businesses: [],
        error: undefined
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
        const cat = e.target.elements.sel_category.value;
        const api_call = await fetch(`${BASE_URL}/businesses/?q=${search}&location=${search}&category=${cat}&limit=10`);
        const data = await api_call.json();
        if (data.Message) {
            this.setState({
                error: "No businesses match your criteria!",
                businesses: []
            });
        } else {
            this.setState({
                businesses: data.businesses,
                error: ''
            });
        }
    }
    render() {
        const { businesses } = this.state;
        const business = businesses.map(business =>
          <BusinessItem business={business} key={business.id}/> 
        );

        return (
            <div>
                <div className="title">
                    <div className="row">
                        <div className="col-md-2"> 
                            <label>Busines Profiles</label>
                        </div>
                        <div className="col-md-8">
                            <SearchForm searchBusinesses ={this.searchBusinesses} />
                        </div>
                       <RegisterBusiness />
                    </div>
                </div>
                <div className="panel-body">
                    <div className="main">
                        { business }
                        <Error error={this.state.error} />}
                    </div>
                </div>
            </div>
        );
    }
}
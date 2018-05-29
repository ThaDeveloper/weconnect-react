import React, { Component } from 'react';
import BASE_URL from '../../utils/url.js';
import SearchForm from './SearchForm'

export default class SearchBusiness extends Component {
	/**
   * constructor that takes
   * @param {object} props
   */
 // constructor(props) {
	// super(props);
	// this.state =  {
	// 	search: undefined,
	// 	businesses: []
	// };
 //   this.handleClick = this.handleClick.bind(this);
 // }
 // handleClick(e) {
	// e.preventDefault();
 // }
 // updateSearch(event) {
	//   //Only 20 characters long string is passed to state
	//   this.setState({search: event.target.value.substr(0, 20)})
	  
  //}
state = {
	businesses: []
}

getBusinesses = async (e) => {
	e.preventDefault();
	const search =  e.target.elements.search.value;
	const api_call = await fetch(`${BASE_URL}/businesses/?category=${search}&limit=10`);
	const data = await api_call.json();
	this.setState({
		businesses: data.businesses
	});
}

    render() {
		console.log(this.state.businesses)
        return (
            <div>
                <div className="col-md-4">
					<label>Business Profiles</label>
				</div>
				<div className="col-md-4">
					 <SearchForm getBusinesses={this.getBusinesses}/>
				</div>
            </div>
        );
    }
}
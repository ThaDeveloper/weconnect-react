import React, { Component } from 'react';
import BASE_URL from '../../utils/url.js';

export default class SearchBusiness extends Component {
	/**
   * constructor that takes
   * @param {object} props
   */
  constructor(props) {
	super(props);
	this.state =  {
		search: '',
		businesses: []
	};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
	e.preventDefault();
  }
  updateSearch(event) {
	  //Only 20 characters long string is passed to state
	  this.setState({search: event.target.value.substr(0, 20)})
	  
  }

  componentWillMount() {
	this.getBusinesses();
}

getBusinesses = async () => {
	const api_call = await fetch(`${BASE_URL}/businesses/?category=${this.state.search}&limit=10`);
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
					<form method="post" action="" className="search" onSubmit={this.getBusinesses} >
						<div className="input-group">
							<input type="text" className="form-control" name="search" size="60"
							 placeholder="Enter Business Name, Location or Category" 
							 value ={this.state.search}
							 onChange={this.updateSearch.bind(this)} />
							<span className="input-group-btn">
							    <button className="btn btn-info" onClick={this.handleClick} ><i className="fa fa-search" ></i>Search</button>
							</span>
						</div>
					</form> 
				</div>
            </div>
        );
    }
}
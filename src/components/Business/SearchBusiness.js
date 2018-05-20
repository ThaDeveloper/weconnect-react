import React, { Component } from 'react';

export default class SearchBusiness extends Component {
    render() {
        return (
            <div>
                <div className="col-md-4">
					<label pu>Business Profiles</label>
				</div>
				<div className="col-md-4">
					<form method="post" action="" className="search">
						<div className="input-group">
							<input type="text" className="form-control" name="search" size="60" placeholder="Enter Business Name, Location or Category" />
							<span className="input-group-btn">
							    <button className="btn btn-info"><i className="fa fa-search"></i>Search</button>
							</span>
						</div>
					</form> 
				</div>
            </div>
        );
    }
}
import React from "react";

const SearchForm = props => (
    
    <form  className="search" onSubmit={props.getBusinesses} >
		<div className="input-group">
			<input type="text" className="form-control" name="search" size="60"
							 placeholder="Enter Business Name, Location or Category" 
							 
			/>
			<span className="input-group-btn">
			    <button className="btn btn-info"><i className="fa fa-search" ></i>Search</button>
			</span>
		</div>
	</form>
);

export default SearchForm;
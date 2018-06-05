import React from "react";

const SearchForm = props => (
    
    <form  className="search" onSubmit={props.searchBusinesses} >
		<div className="input-group">
		<div className="row">
			<div className="col-md-6">
				<input type="text" className="form-control" name="search" size="60"
								placeholder="Enter Business Name or Location" 
								
				/>
			</div>
			<div className="col-md-6">
				<select className="form-control" name="sel_category">
					<option value="">Category...</option>
					<option value="Tech">Tech</option>
					<option value="Health">Health</option>
					<option value="Agriculture">Agriculture</option>
					<option value="FMCG">FMCG</option>
				</select>
			  </div>
			  </div>
			<span className="input-group-btn">
			    <button className="btn btn-info"><i className="fa fa-search" ></i>Search</button>
			</span>
		</div>
	</form>
);

export default SearchForm;
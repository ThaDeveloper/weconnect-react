import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
            
			    <div className="modal fade" id="addbusiness" tabindex="-1" role="dialog" aria-labelledby="addbusiness" aria-hidden="true">
						<div className="modal-dialog" role="document">
							<div className="modal-content">
								<div className="modal-header">
								<h5 className="modal-title" id="addbusiness">Add a Business</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								</div>
								<div className="modal-body">
									<form action="">
										<div className="form-group">
											<input type="text" name="name" className="form-control"
												placeholder="Enter Name..." />
										</div>
										<div className="form-group">
											<textarea className="form-control" name="description" id="description" rows="3" placeholder="Enter Description..."></textarea>
										</div>
										<div className="form-group">
												<input type="text" name="location" className="form-control"
													placeholder="Enter Location..."  />
											</div>
										<div className="form-group">
											<label for="Business Category">Business Category</label>
											<select multiple className="form-control" id="business_category">
												<option>Consumer goods</option>
												<option>Electronics</option>
												<option>Clothing</option>
												<option>Groceries</option>
												<option>Services</option>
											</select>
										</div>
									</form>
								</div>
								<div className="modal-footer">
									<button type="button" className="btn btn-warning btn-lg" data-dismiss="modal">Close</button>
									<button type="button" className="btn btn-info btn-lg">Create</button>
								</div>
							</div>
						</div>
				</div>
		);
    }
}
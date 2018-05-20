import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Business extends Component {
    constructor (props){
        super(props);
        this.state ={
            business: {}
        }
        this.paramId = this.props.match.params.id;
    }
       
    componentWillMount() {
        this.getBusiness();
    }

    getBusiness = async () => {
        const api_call = await fetch(`https://cors-anywhere.herokuapp.com/app-weconnect.herokuapp.com/api/v2/businesses/${this.paramId}`);
        const data = await api_call.json();
        this.setState({
            business: data.businesses[0]
        });
    }

    render() {
        const business = this.state;
        return (
            <div className="main-content">
                <div className="title">
                    <label>Business Profile</label>
               </div>
                <div className="panel-body">
                        <div className="main">
                            <div className="container">
                                <div className="panel panel-default">
                                    <div className="panel-heading text-center">
                                        <a role="button" href="index.html" className="btn btn-default btn-lg pull-left" data-toggle="tooltip" title="Go Back">
                                        <i className="fa fa-chevron-circle-left"></i>Back
                                        </a>
                                        <h2>{business.business.name}</h2>
                                    </div>
                                    <div className="panel-body" id="business_profile">
                                        <div className="panel">
                                            <div className="row">
                                                <div className="col-md-6">
                                                        <div className="text-center">
                                                                <img src="images/google.png" className="img-fluid" alt="Google, Inc. Logo" />
                                                        </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <h3>Overview</h3>
                                                    <p><strong>Location: </strong>{business.business.location}</p>
                                                    <p><strong>Category: </strong>{business.business.category}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="panel">
                                            <h4 className="text-center">About</h4>
                                            <p>
                                            {business.business.description}
                                                </p>
                                        </div>
                                        <p><a href="#reviews" data-toggle="collapse">Reviews</a></p>
                                        <div id="reviews" className="collapse">
                                            <div className="panel">
                                                <h4><strong>Great Tech</strong></h4>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                <label>Reviewed by Justin on <em>28th, Feb, 2018</em></label>
                                                <hr />
                                                <h4><strong>Awesome place to work</strong></h4>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                <label>Reviewed by Morty on <em>29th, Feb, 3100</em></label>
                                                <hr />
                                                <form action="">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" name="review_title" placeholder="Enter Review Title..." />
                                                    </div>
                                                    <div className="form-group">
                                                        <textarea className="form-control" name="review_message"  rows="3" placeholder="Enter Review Message..."></textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <input type="submit" name="review_button" className="btn btn-info btn-lg"
                                                        value="Review" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel-footer">
                                        <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addbusiness" data-toggle="tooltip" title="Edit Business">
                                                <i className="fa fa-edit"> </i>Edit
                                        </button> &nbsp; &nbsp;
                                        <button type="button" className="btn btn-danger btn-lg" data-toggle="tooltip" title="Delete Business">
                                                <i className="fa fa-trash"></i>Delete
                                        </button>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

Business.propTypes = {
    business: PropTypes.object.isRequired
  };
  
Business.defaultProps = {
    business: {}
};
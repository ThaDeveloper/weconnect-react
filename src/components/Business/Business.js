import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import BASE_URL from '../../utils/url.js';

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
        // const paramId = this.props.match.params.id;
        const api_call = await fetch(`${BASE_URL}/businesses/${this.paramId}`);
        const data = await api_call.json();
        this.setState({
            business: data.businesses[0]
        });
    }

    render() {
        const business = this.state;
        const { match, location } = this.props;
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
                                        <Link role="button" to="/" className="btn btn-default btn-lg pull-left" data-toggle="tooltip" title="Go Back">
                                        <i className="fa fa-chevron-circle-left"></i>Back
                                        </Link>
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
                                        
                                          <Reviews business_id={match.params.id} path={location.pathname} />  
                                       
                                            
                                        
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

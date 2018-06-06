import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Register extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                        <h2>Welcome to weConnect</h2>
                        <p>We keep you close to your preffered business</p>
                        <hr />
                            <div className="panel-body">
                                <form action="">
                                    <div className="form-group">
                                        <input type="text" name="username" className="form-control"
                                        placeholder="Enter Username..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control"
                                        placeholder="Enter Password..." />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" name="submit" className="btn btn-info btn-lg btn-block"
                                        value="Register" />
                                    </div>
                                    <label><Link to="login">Sign in here</Link></label>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
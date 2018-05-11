import React, { Component } from 'react';

export default class Businesses extends Component {
    render() {
        return (
            <div className="panel-body">
                <div className="main">
                    <div className="widget">
                        <div className="title">Google</div>
                        <div className="widget-body">
                            <div className="text-center">
                                <img src="images/google.png" className="img-fluid" alt="Google, Inc. Logo" />
                            </div>
                        </div>
                        <div className="widget-footer">
                            <a role="button" href="business.html" className="btn btn-warning btn-lg spull-left">View Profile</a>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="title">Amazon</div>
                        <div className="widget-body">
                                <div className="text-center">
                                        <img src="images/amazon.png" className="img-fluid" alt="Amazon, Inc. Logo" />
                                    </div>
                        </div>
                        <div className="widget-footer">
                            <a role="button" href="business.html" className="btn btn-warning btn-lg pull-left">View Profile</a>
                        </div>
                    </div>
                    <div className="widget">
                        <div className="title">Apple</div>
                        <div className="widget-body">
                            <div className="text-center">
                                <img src="images/apple.png" className="img-fluid" alt="Apple, Inc. Logo" />
                            </div>
                        </div>
                        <div className="widget-footer">
                            <a role="button" href="business.html" className="btn btn-warning btn-lg pull-left">View Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
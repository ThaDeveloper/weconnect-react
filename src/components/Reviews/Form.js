import React, { Component } from 'react';

export default class Form extends Component {
    render() {
        return (
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
        );
    }
}
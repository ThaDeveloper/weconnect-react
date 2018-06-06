import React, { Component } from 'react';
import Review from './Review.js';
import BASE_URL from '../../utils/url.js';

export default class Reviews extends Component {
    constructor(props) {
    super(props);
    this.state = {
        reviews: []
        }
    }
    componentWillMount() {
        this.getReviews();
    }

    getReviews = async () => {
        const api_call = await fetch(`${BASE_URL}/businesses/${this.props.business_id}/reviews`);
        const data = await api_call.json();
        this.setState({
            reviews: data.Reviews
        });
    }
    render() {
        console.log(this.state);
        const { reviews } = this.state;
        // const { business_id } = this.props;
        const review = reviews.map(review =>
          <Review review={review} key={review.id} /> 
        );
     
        return (
                <div id="reviews" >
                    <div className="panel">
                        <h3> Reviews </h3>
                        <hr />
                        { review }
                    </div>
                </div>
        );
    }
}
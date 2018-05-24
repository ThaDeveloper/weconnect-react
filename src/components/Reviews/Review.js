import React from 'react';
import PropTypes from 'prop-types';

const Review = ( {review} ) => (
    <div>
        <div  id={`review-${review.id}`}>
            <h4><strong>{review.title}</strong></h4>
             <p>{review.message}</p>
            <p>Reviewed by <strong><em>{ review.reviewer}</em></strong> on <em>{ review.create_at }</em></p>
        </div>
        <hr />
    </div>
         
);

Review.propTypes = {
  review: PropTypes.object
 };

Review.defaultProps = {
  review: {}
};

export default Review;
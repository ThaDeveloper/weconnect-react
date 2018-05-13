import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const BusinessItem = ({ business }) => (
    <div className="widget">
        <div className="title">
            {/* <Link to={`/${business.id}`}> */}
                { business.name }
            {/* </Link> */}
        </div>
        <div className="widget-body">
            <div className="text-center">
                <img src="images/google.png" className="img-fluid" alt="Google, Inc. Logo" />
            </div>
        </div>
        <div className="widget-footer">
            {/* <Link to={`/${business.id}`}> */}
                <a role="button"  className="btn btn-warning btn-lg spull-left">View Profile</a>
            {/* </Link> */}
            
        </div>
    </div>

)

BusinessItem.propTypes = {
    business: PropTypes.object
  };
  
BusinessItem.defaultProps = {
    business: {}
  };

export default BusinessItem;
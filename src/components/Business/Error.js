
import React from "react";

const Error = props => (
    <div>
    { 
        props.error && <p className="alert alert-danger"> { props.error }</p> 
    }
    </div>

);

export default Error;
import React from 'react';
import SearchBusiness from './SearchBusiness';
import RegisterBusiness from './RegisterBusiness';

const Title = props => (
    <div className="title">
        <div className="row">
            <SearchBusiness />
            <RegisterBusiness />
        </div>
    </div>

);

export default Title
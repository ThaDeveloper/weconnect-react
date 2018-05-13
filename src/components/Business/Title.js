import React from 'react';
import SearchBusiness from './SearchBusiness';
import RegisterBusiness from './RegisterBusiness';
import '../main.css';

const Title = props => (
    <div className="title">
        <div className="row">
            <SearchBusiness />
            <RegisterBusiness />
        </div>
    </div>

);

export default Title
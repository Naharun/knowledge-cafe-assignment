import React from 'react';
import './SingleData.css';

const SingleData = (props) => {
    const info = props.cart.info
    return (
        <div className='single-data'>
            <h4>{info}</h4>
        </div>
    );
};

export default SingleData;
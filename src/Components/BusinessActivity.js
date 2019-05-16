import React from 'react'

import './BusinessActivity.css'

const businessActivity = (props) => {
    return (
        <div className="businessactivity" id="businessactivity">
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
};

export default businessActivity;
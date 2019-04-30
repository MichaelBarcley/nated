import React from 'react'

import './BusinessActivity.css'

const businessActivity = (props) => {
    return (
        <div className="BusinessActivity">
            <p>Hello from Business Activity!</p>
            <p>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
};

export default businessActivity;
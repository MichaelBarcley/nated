import React from 'react';
import NatedIntro from './NatedIntro';
import ReferenceWorks from './ReferenceWorks';
import Company from './Company';

const home = () => {
    return (
        <div className="home">
            <NatedIntro />
            <Company />
            <ReferenceWorks />
        </div>
    );
};

export default home;
import React from 'react';
import CompanyPageData from '../Data/CompanyPageData'
import BusinessActivity from './BusinessActivity';

const company = () => {
    return (
        <div className="Company">
            <div>{CompanyPageData.map(item => {
                return <BusinessActivity name={item.name} description={item.description} />})}
            </div>
        </div>
    );
};

export default company;
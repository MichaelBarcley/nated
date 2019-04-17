import React from 'react';

import './ReferenceWorks.css'

const referenceworks = () => {
    return (
    <div class="referenceworks" id="referenceworks">
        <div class="row">
            <h2>Néhány korábbi munkánk</h2>
        </div>
        <div class="row js--wp-3">
            <div class="col span-1-of-4 box">
                <img src="/images/test-reference.jpg" alt="asd" />
                <h3>bankarkepzo.hu</h3>
            </div>
            <div class="col span-1-of-4 box">
                <img src="/images/test-reference.jpg" alt="work"/>
                <h3>barcleys.com</h3>
            </div>
            <div class="col span-1-of-4 box">
                <img src="/images/test-reference.jpg" alt="work"/>
                <h3>random cég</h3>
            </div>
            <div class="col span-1-of-4 box">
                <img src="/images/test-reference.jpg" alt="work"/>
                <h3>random cég 2</h3>
            </div>
        </div>
    </div>
)};

export default referenceworks;
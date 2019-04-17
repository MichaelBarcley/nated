import React from 'react';

import './ReferenceWorks.css'
import smth from '../Resources/test-reference.jpg'

const referenceworks = () => {
    return (
    <div class="referenceworks" id="referenceworks">
        <div class="row">
            <h2>Néhány korábbi munkánk</h2>
        </div>
        <div class="row js--wp-3">
            <div class="col span-1-of-4 box">
                <a href="https://www.google.com"><img src={smth} alt="logo"></img></a>
                <h3>bankarkepzo.hu</h3>
            </div>
            <div class="col span-1-of-4 box">
                <a href="https://www.index.hu"><img src={smth} alt="logo"></img></a>
                <h3>barcleys.com</h3>
            </div>
            <div class="col span-1-of-4 box">
                <a href="https://www.youtube.com"><img src={smth} alt="logo"></img></a>
                <h3>random cég</h3>
            </div>
            <div class="col span-1-of-4 box">
                <a href="https://www.gmail.com"><img src={smth} alt="logo"></img></a>
                <h3>random cég 2</h3>
            </div>
        </div>
    </div>
)};

export default referenceworks;
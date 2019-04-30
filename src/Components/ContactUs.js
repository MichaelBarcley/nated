import React from 'react';

import './ContactUs.css';

const contactus = () => {
    return ( 
        <div className="contactus">
            <div className="interested">
                <h2>Felkeltettük érdeklődését?</h2>
                <p>Keressen minket bizalommal!</p>
            </div>
            <div className="row">
                <div className="col">
                    <h3>Barczi Zsolt</h3>
                    <p>Telefonszám: +36 20 489 70 80</p>
                    <p>Email cím: <a href="mailto:zsbarczi@nated.hu">zsbarczi@nated.hu</a></p>
                </div>
                <div className="col">
                    <h3>Dobos Imre</h3>
                    <p>Telefonszám: +36 30 653 44 00</p>
                    <p>Email cím: <a href="mailto:idobos@nated.hu">idobos@nated.hu</a></p>
                </div>
            </div>
        </div>
    );
};

export default contactus;
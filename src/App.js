import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './Components/Header'
import Home from './Components/Home';
import Company from './Components/Company';
import Individual from './Components/Individual';
import MissingError from './Components/MissingError';
import ContactUs from './Components/ContactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/individual" component={Individual} />
            <Route path="/company" component={Company} />
            <Route component={MissingError} />
          </Switch>
          <ContactUs />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './Components/Header'
import Home from './Components/Home';
import Company from './Components/Company';
import ContactUs from './Components/ContactUs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/nated" component={Home} exact />
            <Route path="/nated/company" component={Company} />
            <Route component={Home} />
          </Switch>
          <ContactUs />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

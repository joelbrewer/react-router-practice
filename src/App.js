import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

// Components
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Navigation from './components/Navigation';

class App extends Component {

  state = {
    name: 'Joel',
  }

  render() {
    return (
      <div clasName="app">
        <Router>
          <Navigation />
          <Switch>
            <Route
              exact
              path='/'
              render={(props) => <Home history={props.history} />}
            />
            <Route
              path='/about'
              render={(props) => <About match={props.match} username={this.state.name} />}
            />
            <Route
              path='/contact'
              component={Contact}
            />
            <Route
              component={NotFound}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

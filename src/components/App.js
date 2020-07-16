import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { connect } from 'react-redux';

import DisplayBios from './DisplayBios';
import AddDeveloper from './AddDeveloper';
import Navbar from './Navbar';
import Home from './Home';
import devActions from '../reducers/devBios';

class App extends Component{
  constructor(props){
    super(props);
    this.props.fetchDevelopers();
  }

  render(){
    return (
      <Router>
        <Navbar />
        <Switch >
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/bios">
            <DisplayBios developers={this.props.developers} />
          </Route>
          <Route path="/create-bio" >
            <AddDeveloper  />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(({developers}) => ({
  developers: developers
}),{
  fetchDevelopers: devActions.getAllBiosRequestActionCreator
})(App);
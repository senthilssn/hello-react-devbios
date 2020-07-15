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

  componentDidMount = () => {
    fetch('https://tech-services-1000201953.uc.r.appspot.com/developers')
    .then(res=>res.json())
    .then(devs=>this.props.fetchDevelopers(devs))
    .catch(error=>console.log('The following error occurred: '+error))
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
            <AddDeveloper addDeveloper={this.addDeveloper} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default connect(({developers}) => ({
  developers: developers
}),{
  fetchDevelopers: devActions.getAllBiosActionCreator
})(App);
import React, {Component} from 'react';
import{
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'

import DisplayBios from './DisplayBios';
import Developer from './Developer';
import AddDeveloper from './AddDeveloper';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        developers:[
            new Developer(1,"Senthil","Srinivasan","Java",2007),
            new Developer(2,"Mano","Mani","SQL",2018)
        ]
    }
  }

  componentDidMount=()=>{
    fetch("https://tech-services-1000201953.uc.r.appspot.com/developers")
    .then(res=>res.json())
    //.then(devs=>this.props.addDeveloper(devs))
    .then(devs=>this.setState({developers:devs}))
    .catch(error=>console.log("This Error Occured" + error))
  }

  addDeveloper = (dev) => {
    dev.id = this.state.developers.length + 1;
    let devs = [...this.state.developers,dev];

    this.setState({developers:devs});
  }
  
  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/bios">
            <DisplayBios developers={this.state.developers} />  
          </Route>          
          <Route path="/create-bio">
            <AddDeveloper addDeveloper={this.addDeveloper} />
          </Route>                    
        </Switch>        
      </Router>      
    );
  }
}


export default App;
import React from 'react';

import {HomeContainer} from './containers/HomeContainer'
import './App.css';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from './containers/UserContainer'
import LogInContainer from './containers/LogInContainer'
import LogInForm from './components/users/logInForm'
const App = props => {
  
  
  return(
    <div>
      <Router>
        <Route path="/" component={HomeContainer} />
        <Route exact path="/signup" component={UserContainer} />
        <Route exact path="/login" component={LogInContainer} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} /> */}
      </Router>
    </div>
    );
  
}


export default App;

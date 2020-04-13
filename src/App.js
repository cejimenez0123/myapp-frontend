import React from 'react';

import {HomeContainer} from './containers/HomeContainer'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import FormContainer from './containers/FormContainer'
import ProfileContainer from './containers/profileContainer'
import { connect} from "react-redux"

import {PrivateRoute} from "./functions/privateRoute"

class App extends React.Component{



render(){
  return(
    <div>
      <Router>
          <Route path="/">
  {this.props.loggedIn ? <Redirect to={`/users/${this.props.currentUser.id}`} /> : <HomeContainer/>}
          </Route>
           <Route path="/signin" >
               < FormContainer />
          </ Route>
          <PrivateRoute exact path="/users/:userid" >
              <ProfileContainer currentUser={this.props.currentUser}/>
            </PrivateRoute>
        
      <Switch >
      {/* < PrivateRoute to="/user/:id" /> */}
      </Switch>
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} /> */}
      </Router>
    </div>
    );}
}
  


const mapStateToProps= (state)=>{
  return{
    currentUser: state.currentUser,
    loggedIn: state.loggedIn
  }
}


export default connect(mapStateToProps)(App);


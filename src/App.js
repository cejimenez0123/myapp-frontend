import React from 'react';

import {HomeContainer} from './containers/HomeContainer'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import FormContainer from './containers/FormContainer'
import ProfileContainer from './containers/profileContainer'
import PageContainer from "./containers/PageContainer"
import { connect} from "react-redux"

import {PrivateRoute} from "./functions/privateRoute"

class App extends React.Component{



render(){
  return(
    <div>
      <Router>
      {this.props.loggedIn ? <Redirect to={`/users/${this.props.currentUser.id}`} /> : <HomeContainer/>}
      
        <PrivateRoute path={`/pages/:pageId/edit`} children={<PageContainer/>}/>      
        
        
        <Route path="/signin" >
               < FormContainer />
          </ Route>
         
          <PrivateRoute exact path="/users/:userid" >
              <ProfileContainer currentUser={this.props.currentUser}/>
          </PrivateRoute>
          
     
      {/* < PrivateRoute to="/user/:id" /> */}

        {/* <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} /> */}
      </Router>
    </div>
    );}
}
  


const mapStateToProps= (state)=>{
  let id = localStorage.getItem("pageLink")
  return{
    currentUser: state.users.currentUser,
    loggedIn: state.users.loggedIn,
  }
}


export default connect(mapStateToProps)(App);


import React from 'react';

import {HomeContainer} from './containers/HomeContainer'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import FormContainer from './containers/FormContainer'
import ProfileContainer from './containers/profileContainer'
import PageContainer from "./containers/PageContainer"
import { connect} from "react-redux"
import {getUsers} from "./actions/userActions"
import {PrivateRoute} from "./functions/privateRoute"
import { getAllPages, showPage} from "./actions/pageActions"
class App extends React.Component{



render(){
  return(
    <div>
      <Router>
      {this.props.loggedIn ? <Redirect to={`/users/${this.props.currentUser.id}`} /> : <HomeContainer currentUser={this.props.currentUser} />}
      
        <PrivateRoute path={`/pages/:id`} children={<PageContainer page={this.props.currentPage} showPage={this.props.showPage} pages={this.props.pages} getAllPages={this.props.getAllPages}/>}/>      
        
        
        <Route path="/signin" >
               < FormContainer />
          </ Route>
         
          <PrivateRoute exact path="/users/:userid" >
              <ProfileContainer currentUser={this.props.currentUser} pages={this.props.pages}/>
          </PrivateRoute>
          
     
      {/* < PrivateRoute to="/user/:id" /> */}

        {/* <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} /> */}
      </Router>
    </div>
    );}
}
const mapDispatchToProps = (dispatch)=>{
  return{
    getAllPages: ()=> dispatch(getAllPages()),
    showPage: ()=>dispatch(showPage())
    
  }
}
const mapStateToProps= (state)=>{
  let id = localStorage.getItem("pageLink")

  return{
  
    currentUser: state.users.currentUser,
    loggedIn: state.users.loggedIn,
    pages: state.pages.pages.flat(),
    currentPage: state.pages.currentPage
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);


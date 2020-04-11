import React from 'react';

import {HomeContainer} from './containers/HomeContainer'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UserContainer from './containers/UserContainer'
import ProfileContainer from './containers/profileContainer'



// function PrivateRoute({children,...rest}){
//   return(
//     <div>
//     < Route 
   
//      />
//     </div>
//   )
// }
const App = props => {
 

  return(
    <div>
      <Router>
        <Route path="/" component={HomeContainer} />
        <Route exact path="/signin" >
    < UserContainer />
          </ Route>
      <Switch >
      {/* < PrivateRoute to="/user/:id" /> */}
      </Switch>
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} /> */}
      </Router>
    </div>
    );
  // const auth =(u) =>{
  //   return ({
  //     isAuthenticated: false,
  //     auth: ()=>{return },
  //     signOut: () => history.push("/"),
  //     logIn: ()=>{return}
  // })
  }
  // const authButton=()=>{
  
  //   return auth.isAuthenticated ? (
  //     <p>
  //       Welcome!{" "}
  //       <button
  //         onClick={() => {
  //           auth.signOut(() => history.push("/"));
  //         }}
  //       >
  //         Sign out
  //       </button>
  //     </p>
  //   ) : (
  //     <p>You are not logged in.</p>
  //   );
  // }
  
  



export default App;

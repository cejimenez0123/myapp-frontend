import React, { Component } from 'react'
import UserForm from '../components/users/signUpForm'
import { connect } from 'react-redux';
import { SIGN_UP,LOG_IN } from "../actions/userActions"
import LogInForm from "../components/users/logInForm"
import "../App.css"
class FormContainer extends Component{


    render(){
        return(
            <div class="form" >
                <p> exampe username: kennith </p>
                <p>   name: Guadalupe Bayer </p>
                <p> username: lynetta</p>
                <p> name:Charlene O'Keefe</p>
                <p>same password: joe</p>
                <LogInForm logIn={this.props.logIn} />
                <br/>
                <UserForm signUp={this.props.signUp}/>

            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return { signUp: (user) => dispatch(SIGN_UP(user)),
             logIn: (user)=> dispatch(LOG_IN(user)) }
  }

export default connect( null, mapDispatchToProps)(FormContainer)
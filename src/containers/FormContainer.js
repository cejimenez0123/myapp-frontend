import React, { Component } from 'react'
import UserForm from '../components/users/signUpForm'
import { connect } from 'react-redux';
import { SIGN_UP,LOG_IN } from "../actions/userActions"
import LogInForm from "../components/users/logInForm"

class FormContainer extends Component{


    render(){
        return(
            <div>
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
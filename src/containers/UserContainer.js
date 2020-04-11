import React, { Component } from 'react'
import UserForm from '../components/users/signUpForm'
import { connect } from 'react-redux';
import { SIGN_UP } from "../actions/userActions"
import LogInForm from "../components/users/logInForm"
class UserContainer extends Component{


    render(){
        return(
            <div>
                <LogInForm />
                <br/>
                <UserForm signUp={this.props.signUp}/>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return { signUp: (user) => dispatch(SIGN_UP(user)) }
  }

export default connect( null, mapDispatchToProps)(UserContainer)
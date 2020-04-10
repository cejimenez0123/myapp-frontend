import React, { Component } from "react"
import { SIGN_UP_START } from "../../actions/userActions"

export default class UserForm extends Component{
    constructor(){
        super()
        this.state ={
            name: "",
            username: "",
            password: ""
        }
    }
    hanldeOnChange = e =>{
        this.setState({[e.target["name"]]: e.target.value})
    }
    handleOnSubmit = e =>{
        e.preventDefault()
        dispatch(SIGN_UP_START(this.state))
    }
    render(){
        return(
            <div>
                <form>
                    <label for="name">Name:</label>
                    <input type="text" name="name" onChange={this.handleOnChange}/>
                    <br/>
                    <label for="username">Username:</label>
                    <input type="text" name="username" />
                    <br />
                    <label for="password">Password:</label>
                    <input type="password" name="name" />
                    <br />
                    < input type="submit" value="Sign Up"/>
                </form>
                
            </div>
        )
    }
}
// function mapDispatchToProps(dispatch){
//     return { signUp: (user) => dispatch(SIGN_UP_START(user)) }
//   }

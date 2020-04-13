import React, { Component } from "react"
import {LOG_IN }from '../../actions/userActions'

class LogInForm extends Component{
    constructor(){
        super()
        this.state ={
            username: "",
            password: ""
        }
    }

    hanldeOnChane = e =>{
        this.setState({[e.target["name"]]: e.target.value})
    }
    handleOnSubmit = e => {
        e.preventDefault()
        
  
    }
    render(){
        return(
            <div id="LogInForm">
                <form onSubmit={this.handleOnSubmit}> 
                    <label for="username">Username:</label>
                    <input type="text" name="username" onChange={this.handleOnChange}/>
                    <br />
                    <label for="password">Password:</label>
                    <input type="password" name="name" onChange={this.handleOnChange}/>
                    <br />
                    < input type="submit" value="Log In"/>
                </form>
                
            </div>
        )
    }
}


export default LogInForm
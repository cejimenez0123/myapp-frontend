import React, { Component } from "react"
import {dispatch} from "react-redux"
class LogInForm extends Component{
    constructor(){
        super()
        this.state ={
            username: "",
            password: ""
        }
    }

    hanldeOnChane = e =>{
        debugger
        this.setState({[e.target["name"]]: e.target.value})
    }

    render(){
        return(
            <div>
                <form>
                    <label for="username">Username:</label>
                    <input type="text" name="username" onChange={this.handleOnChange}/>
                    <label for="password">Password:</label>
                    <input type="password" name="name" onChange={this.handleOnChange}/>
                    < input type="submit" value="Log In"/>
                </form>
                
            </div>
        )
    }
}
export default LogInForm
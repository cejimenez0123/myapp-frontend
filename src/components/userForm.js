import React, { Component } from "react"

class UserForm extends Component{
    constructor(){
        super()
        this.state ={
            name: "",
            username: "",
            password: ""
        }
    }
    render(){
        return(
            <div>
                <label for="name">Name:</label>
                <input type="text" name="name" />
                <label for="username">Username:</label>
                <input type="text" name="username" />
                <label for="password">Password:</label>
                <input type="password" name="name" />
            </div>
        )
    }
}
export default UserForm
import React, { Component } from "react"


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
      
        // try {
        //     await Auth.signIn(this.state.username, this.state.password);
        //     userHasAuthenticated(true);
        //     history.push("/");
        //   } catch (e) {
        //     alert(e.message);
        //   }
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
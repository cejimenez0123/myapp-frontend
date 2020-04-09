import React, { Component } from 'react'
import {Navbar,NavLink, NavbarBrand} from 'reactstrap'
export class NavbarContainer extends Component{



    render(){
        return(
            <div>
                <Navbar>
                    <NavbarBrand href="/"> Pb</NavbarBrand>
                    <NavLink  href="/logIn">Log In</NavLink> 
                    <NavLink href="/signUp"> Sign Up</NavLink>       
                </Navbar>
            </div>
        ) 
        
    }
}

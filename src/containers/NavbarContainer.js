import React, { Component } from 'react'
import {Navbar,NavLink, NavbarBrand} from 'reactstrap'
export class NavbarContainer extends Component{

    renderIf(){
        if (this.props.currentUser){
            return <NavLink href={`/users/${this.props.currentUser.id}`}> Profile</NavLink> 
        }else{
           return <NavLink href="/signin"> Sign In</NavLink> 
        }
    }

    render(){
        return(
            <div>
                <Navbar style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }} >
                    <NavbarBrand href="/"> Pb</NavbarBrand>
                    {this.renderIf()}
                </Navbar>
            </div>
        ) 
        
    }
}

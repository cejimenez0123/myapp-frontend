import React, { Component } from 'react'
import {Navbar,NavLink, NavbarBrand} from 'reactstrap'
export class NavbarContainer extends Component{



    render(){
        return(
            <div>
                <Navbar style={{ borderBottom: '2px solid black', paddingBottom: '10px', marginBottom: '12px' }} >
                    <NavbarBrand href="/"> Pb</NavbarBrand>
                    <NavLink href="/signin"> Sign In</NavLink>       
                </Navbar>
            </div>
        ) 
        
    }
}

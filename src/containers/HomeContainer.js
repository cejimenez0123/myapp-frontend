import React, { Component } from 'react'
import {NavbarContainer} from './NavbarContainer'

export class HomeContainer extends Component{



    render(){
        return(
            <div>
                < NavbarContainer currentUser={this.props.currentUser}/>
                
            </div>
        ) 
        
    }
}
 
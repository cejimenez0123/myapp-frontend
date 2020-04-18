import React, { Component } from 'react'
import NavbarContainer from './NavbarContainer'

export class HomeContainer extends Component{



    render(){
        return(
            <div>
                < NavbarContainer  endSession={this.props.endSession} currentUser={this.props.currentUser}/>
                
            </div>
        ) 
        
    }
}
 
import React, { Component } from 'react'
import {Navbar,NavLink, NavbarBrand} from 'reactstrap'
import {connect} from 'react-redux'
class NavbarContainer extends Component{


    handleOnClick(){
        this.props.endSession()
    }
    renderIf(){
        console.log("PRPRP",this.props.currentUser)
        
        if (this.props.currentUser){
            return (<div>
            <NavLink href={`/users/${this.props.currentUser.id}`}> Profile</NavLink> 
            <NavLink onClick={()=>this.handleOnClick} href={'/'}>Log Out</NavLink>
            </div>
            )
    }else{
           return <NavLink href="/signin"> Sign In</NavLink> 
        }
    }

    render(){
        console.log("nav",this.props)
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
const mapStateToProps = (state)=>{
    return{
        currentUser: state.users.currentUser
    }
}
export default connect(mapStateToProps)(NavbarContainer)
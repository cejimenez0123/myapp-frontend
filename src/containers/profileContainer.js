import React from 'react'
import { connect } from 'react-redux'
import { Inbox } from '../components/pages/inbox'
import {Profile} from '../components/users/profile'
import PageForm from '../components/pages/pageForm'
import UserPages from '../components/users/userPages'
import { getUsers,LOG_IN,getAllUserPages} from "../actions/userActions"
import { getAllPages, sharedPages, showPage} from "../actions/pageActions"
class ProfileContainer extends React.Component{
    
componentDidMount(){
    this.props.getUsers()
    this.props.GetSharedPages()
    this.props.getMyPages()
    this.props.getAllPages()
}
        
   
    
    render(){
       
        return(
            <div >
                < Profile currentUser={this.props.currentUser}/>
                < PageForm />
                < UserPages  users={this.props.users} currentUser={this.props.currentUser} pages={this.props.pages} getUsers={this.props.getUsers} getAllPages={this.props.getMyPages} />
                < Inbox sharedPages={this.props.sharedPages} myPages={this.props.myPages} pages={this.props.pages} users={this.props.users} currentUser={this.props.currentUser} getAllPages={this.props.getAllPages} showPage={this.props.showPage}/>
            </div>
        )
    }
}


const mapDispatchToProps= (dispatch)=>{
  return { getUsers: ()=>{dispatch(getUsers())},
  getAllPages: ()=> dispatch(getAllPages()),
  GetSharedPages: ()=> dispatch(sharedPages()),
  getMyPages: ()=>dispatch(getAllUserPages()),
  showPage: ()=>dispatch(showPage())
  
  }
}
const mapStateToProps = (state) => {
    return { users: state.users.users,
    currentUser: state.users.currentUser,
    sharedPages: state.pages.sharedPages,
    myPages: state.pages.myPages,
    pages: state.pages.pages.flat()};
  };

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
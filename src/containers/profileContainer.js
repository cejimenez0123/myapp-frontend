import React from 'react'
import { connect } from 'react-redux'
import { useParams  } from 'react-router-dom'
import {Profile} from '../components/users/profile'
import PageForm from '../components/pages/pageForm'
import UserPages from '../components/users/userPages'
import { getUsers} from "../actions/userActions"
class ProfileContainer extends React.Component{
    
componentDidMount(){
    this.props.getUsers()
}
        
   
    
    render(){

        return(
            <div >
                < Profile currentUser={this.props.currentUser}/>
                < PageForm />
                < UserPages  users={this.props.users} pages={this.props.pages} getUsers={this.props.getUsers}/>
            </div>
        )
    }
}


const mapDispatchToProps= (dispatch)=>{
  return { getUsers: ()=>{dispatch(getUsers())}
  }
}
const mapStateToProps = (state) => {
    return { users: state.users.users,
    currentUser: state.users.currentUser,
    pages: state.pages.pages};
  };

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)
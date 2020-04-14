import React from 'react'
import { connect } from 'react-redux'
import { useParams  } from 'react-router-dom'
import {Profile} from '../components/users/profile'
import PageForm from '../components/pages/pageForm'
import UserPages from '../components/users/userPages'
class ProfileContainer extends React.Component{
    
    

    render(){
        return(
            <div>
                < Profile currentUser={this.props.currentUser}/>
                < PageForm />
                < UserPages pages={this.props.pages}/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return{

    }
}
const mapStateToProps = (state) => {
    return { users: state.users.users,
    currentUser: state.users.currentUser,
    pages: state.pages.pages};
  };

export default connect(mapStateToProps)(ProfileContainer)
import React from 'react'
import { connect } from 'react-redux'
import { useParams  } from 'react-router-dom'
import {Profile} from '../components/users/profile'
import BookForm from '../components/books/bookForm'
class ProfileContainer extends React.Component{
    
    

    render(){
     console.log(this.props)
        debugger
        return(
            <div>
                < Profile currentUser={this.props.currentUser}/>
                
               
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users,
    currentUser: state.currentUser};
  };

export default connect(mapStateToProps)(ProfileContainer)
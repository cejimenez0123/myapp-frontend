import React from 'react'
import { connect } from 'react-redux'
import { useParams  } from 'react-router-dom'
import {Profile} from '../components/users/profile'
import PageForm from '../components/pages/pageForm'
class ProfileContainer extends React.Component{
    
    

    render(){
     console.log(this.props)
        return(
            <div>
                < Profile currentUser={this.props.currentUser}/>
                
                < PageForm />
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
    currentUser: state.users.currentUser};
  };

export default connect(mapStateToProps)(ProfileContainer)
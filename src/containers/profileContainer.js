import React from 'react'
import { connect } from 'react-redux'
import { useParams  } from 'react-router-dom'


class ProfileContainer extends React.Component{
    
    
    

    render(){
        console.log(this.props)
        debugger
        return(
            <div>
                Profile Conatiner
               {this.props.currentUser.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { users: state.users,
    currentUser: state.currentUser};
  };

export default connect(mapStateToProps)(ProfileContainer)
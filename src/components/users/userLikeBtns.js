import React from 'react'
import UserLike from './userLike'
export default class UserLikeBtns extends React.Component{
   
    doSomething = ()=>{
        return this.props.users.map((user,i)=>{
            user = user.attributes
         
        return (< UserLike ket={i} user={user}/>)
        })
    }
    
    
    render(){
        return(
            <div>
                <h2>Like Some Users</h2>
                <ul>
                {this.doSomething()}
                </ul>
            </div>
        )
    }


}
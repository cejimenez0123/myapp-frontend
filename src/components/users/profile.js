import React from 'react'

export const Profile = (props) =>{
let user = props.currentUser
console.log(props)
    return(

     <div>
         <h3>{user.name}</h3>
         <br/>
         <h4>{user.username}</h4>
     </div>
    )
}
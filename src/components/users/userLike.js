import React from 'react'

class UserLike extends React.Component{
    constructor(){
        super()
        this.state ={
            id: "",
            name: "",
            username: "",
            likes: 0,
            liked: false
        }
        
    }
    
    componentWillMount(){ 
        this.setState({...this.props.user, likes: 0})
    }
    handleOnClick(){
        let i = this.state.likes
       
         
        this.setState({...this.state,likes: i+=1, liked: false})
        
    }



    render(){
  
        return(
            <div>
                <li>{this.props.user.name}-<div >{this.state.likes} Likes<button onClick={()=>this.handleOnClick()}>Like</button></div></li>
            </div>
        )
    }
}
export default UserLike
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
        if(!this.state.liked){  
            i+=1
        this.setState({...this.state,likes: i,liked:true})}else{
           i-=1
           this.setState({...this.state,likes: i, liked: false})
        }
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
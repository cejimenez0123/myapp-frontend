import React from 'react'
import {connect} from 'react-redux'
class Page extends React.Component{
    constructor(){
        super()
        this.state = {
            text: "it is what it is",
            title:""
        }
    }
    componentWillMount(){
      let text  = this.props.page.text
      let title = this.props.page.title
      this.setState({text,title})
    }
    
    render(){
        
    return(
        <div >Page
            <br/>
            <textarea 
             col="10" row="15" value={this.state.text}/>
        </div>
       
    )}
}


export default Page
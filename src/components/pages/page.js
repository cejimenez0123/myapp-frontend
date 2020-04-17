import React from 'react'
import { showPage,updatePage} from '../../actions/pageActions'
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
        console.log(this.props)
      let text  = this.props.page.text
      let title = this.props.page.title
      this.setState({text,title})
    }
    handleOnChange(e){
        
        this.setState({[e.target.id] : e.target.value})
        console.log(this.state)
    }
    handleOnSubmit(e){
        e.preventDefault()
        debugger
       let text = e.target.querySelector("textarea").value
       let title = e.target.querySelector("input#title").value
    
        this.props.updatePage(text,title)
            if(this.props.docSaved){
            alert("Document Saved")          
            } else {
            alert("Not saved yet")
        }
    }
    
    render(){
        
    return(
        <div >Page
            <br/>
        <form onSubmit={(e)=>this.handleOnSubmit(e)}>
            < input type="text" id="title" onChange={(e)=>this.handleOnChange(e)} value={this.state.title}></input>
            <br/>
            <textarea onChange={(e)=>this.handleOnChange(e)} name="text"
             col="100" row="100" id="text" value={this.state.text}/>
             <input type="submit" value="save"/>
        </form>
        </div>
       
    )}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        showPage: ()=>dispatch(showPage()),
        updatePage: ()=>updatePage()
    }
}

export default connect(null,mapDispatchToProps)(Page)
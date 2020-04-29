import React from 'react'
import { showPage,updatePage,DELETE_PAGE} from '../../actions/pageActions'
import {connect} from 'react-redux'
class Page extends React.Component{
    constructor(){
        super()
        this.state = {
            text: "it is what it is",
            title:""
        }
    }
    componentWillReceiveProps(){
        console.log(this.props)
      let text  = this.props.page.text
      let title = this.props.page.title
      this.setState({text,title})
    }
    handleOnChange(e){
        
        this.setState({[e.target.id] : e.target.value})

    }
    handleOnSubmit(e){
        e.preventDefault()
       let text = e.target.querySelector("textarea").value
       let title = e.target.querySelector("input#title").value
    
        this.props.updatePage(text,title)
            if(this.props.docSaved){
            alert("Document Saved")          
            } else {
            alert("Not saved yet")
        }
    }
    handleOnClick(){
        this.props.deletePage(this.props.page.id)
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
        < button type="button"  onClick={()=>{this.handleOnClick()}}>Delete</button>
        </div>
       
    )}
}

const mapDispatchToProps = (dispatch)=>{
    return{
        showPage: ()=>dispatch(showPage()),
        updatePage: (text,title)=>updatePage(text,title),
        deletePage: (id)=>(DELETE_PAGE(id))
        }
}

export default connect(null,mapDispatchToProps)(Page)
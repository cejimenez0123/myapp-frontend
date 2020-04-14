import React, {Component} from 'react'
import { addPage } from '../../actions/pageActions'
import { connect } from 'react-redux'
class PageForm extends React.Component{
    hanldeOnClick(){
    
        let text = document.getElementById("text")
        debugger
        if (text.style.display === "none"){
            text.style.display = "block"
        }else{
            text.style.display = "none"
        }
        
    }
    handleOnSubmit(e){
        debugger


    }

    render(){
        return(
            <div id="pageForm">
                < button onClick={()=> this.hanldeOnClick()}> Make a Page</button>
               < form onSubmit={(e)=>this.handleOnSubmit(e)}>
               <textarea id="text" style={{display: "block"}}
                rows="5" cols="50"></textarea>
                < input type="submit" value="save"/>
            </form>
                
            
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addPage: (page) => dispatch(addPage(page))
    }
} 
export default connect(null,mapDispatchToProps)(PageForm)
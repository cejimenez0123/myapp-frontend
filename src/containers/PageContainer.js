import React from 'react'
import {connect} from 'react-redux'
import Page from '../components/pages/page'
let pageUrl = "http://localhost/pages/"

class PageContainer extends React.Component{
    renderPage(){
       return this.props.pages.map((p,i)=>{
            if(p.id === localStorage.getItem("pageLink")){
            return (<Page key={i} page={p}/>)}
        })
    }
    

    render(){
        debugger
        console.log(this.props)
        return(
            <div className="pageContainer">
               {this.renderPage()}
            </div>
        )
    }

}
const mapStateToProps = state =>{
    return {
       pages: state.pages.pages
    }
}

export default connect(mapStateToProps)(PageContainer)
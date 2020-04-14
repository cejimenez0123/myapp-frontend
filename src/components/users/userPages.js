import React from 'react'
import "../../App.css"
import {Link} from 'react-router-dom'


const UserPages = (props)=>{
    function handleLinking(id){
        localStorage.setItem("pageLink",id)
    }
    function renderPages(){
        if (props.page === []){
            return (<h6>You should make a page</h6>)}
            else{
       return props.pages.map((p,i) =>{
     
            return( <li key={i}><Link onClick={()=>handleLinking(p.id)} key={i} to={`/pages/${p.id}/edit`}>
                {p.title}
            </Link>
            <button>Share</button></li>)
        })}
    }
    
    return(
    
        <div id="userPages" style={{border: "3px solid green",display: "inline"}}>
            <h2>Stored Pages</h2>
            <ul>
            {renderPages()}
            </ul>
        </div>
    )

}

export default UserPages

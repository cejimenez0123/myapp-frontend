import React from 'react'
import "../../App.css"
import {Link} from 'react-router-dom'
import {sharePage} from "../../actions/pageActions"

const UserPages = (props)=>{
    const handleLinking=(id)=>{
        props.getAllPages()
        localStorage.setItem("pageLink",id)
    }
    const renderPages = () =>{
        
        
       return( props.pages.map((p,i) =>{
        if(p.attributes){
         p = p.attributes
        } 
        if(p.user_id === localStorage.getItem("currentUser")){
            return( <li key={i}><Link onClick={()=>handleLinking(p.id)} key={i} to={`/pages/${p.id}`}>
                {p.title}
            </Link>
            <button onClick={()=>{toggleDisplay()}}>Share</button>
          
            <div id="userShareList"style={{display: "none"}}>
            <form onSubmit={(e)=>handleOnSubmit(e)}>
                <ul>
                {props.users.flat().slice(0,6).map((u,i)=>{  
                   if(u.id !== props.currentUser.id){
                      let user = u.attributes
                   return (<li key={i}>
                        <label htmlFor="userCheckBox">{user.name}</label>
                        <input key={i} className="userCheckBox" type="checkbox" id={user.id} data-pageid={p.id} value={user.name}/>
                        
                    </li>)
       }})}
                </ul>
                < input type="submit" id="shareWithBtn" value="Share with"/>
            </form>
        </div>
               
            </li>)
           
        }})
       )}
    
       const handleOnSubmit=(e)=>{
           e.preventDefault()

            let inputs = Array.from(e.target.getElementsByClassName("userCheckBox"))
        let checkedInputs = inputs.filter(input =>input.checked ===  true
            )
            sharePage(checkedInputs)
        
       }

    const toggleDisplay = ()=>{
        let obj = document.getElementById("userShareList")
        
        if (obj.style.display === "none"){
            obj.style.display = "block"
        }else{
            obj.style.display= "none"
        }

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

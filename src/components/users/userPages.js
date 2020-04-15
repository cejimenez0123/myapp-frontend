import React from 'react'
import "../../App.css"
import {Link} from 'react-router-dom'


const UserPages = (props)=>{
    const handleLinking=(id)=>{
        localStorage.setItem("pageLink",id)
    }
    let trigger = false
    const renderPages = () =>{

       return( props.pages.map((p,i) =>{
     
            return( <li key={i}><Link onClick={()=>handleLinking(p.id)} key={i} to={`/pages/${p.id}/edit`}>
                {p.title}
            </Link>
            <button onClick={()=>{toggleDisplay()}}>Share</button>
          
            <div id="userShareList"style={{display: "none"}}>
            <form onSubmit={(e)=>handleOnSubmit(e)}>
                <ul>
                {props.users[0].slice(0,6).map((u,i)=>{  
                   let user = u.attributes
                   return (<li key={i}>
                        <label htmlFor="userCheckBox">{user.name}</label>
                        <input key={i} className="userCheckBox" type="checkbox" id={user.id} value={user.name}/>
                        
                    </li>)
                })}
                </ul>
                < input type="submit" id="shareWithBtn" value="Share with"/>
            </form>
        </div>
               
            </li>)
           
        })
       )}
    
       const handleOnSubmit=(e)=>{
        debugger
        let inputs = e.target.getElementsByClassName("userCheckBox")
        let checkInputs = inputs.filter(input =>{
            input.checked === true
        })
        
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

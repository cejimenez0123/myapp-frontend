import React from 'react'
import PageLinkBox from './PageLinkBox'

export const Inbox = (props)=> {

    
  
    const renderBox=()=>{  
       return props.myPages.map((page,i)=>{
            let p = page.attributes
             return < PageLinkBox key={i} id={i} page={p} users={props.users} currentUser={props.currentUser} getAllPages={props.getAllPages} showPage={props.showPage} sharedPages={props.sharedPages}/>
              
         })
        }


    
      
        return(
            <div>
                <h2>Inbox</h2>
            {renderBox()}
            </div>
        )
    
}

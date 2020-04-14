const pageUrl = "http://127.0.0.1:3000/pages"

const addPage = (text,title) =>{ 
   
    let userId = localStorage.getItem("currentUser")
    let config = {    
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
            title: title,
            text: text, 
            userid: userId
          })}
          return ((dispatch) => {
              dispatch(addPageStart())
              fetch(pageUrl,config).then(res =>res.json())
              .then(obj=>{
                 
                  let page = obj.data.attributes
                  dispatch({type: "ADD_PAGE", page})
              })
              
          } )}

const addPageStart = ()=>{
    return {
        type: "ADD_PAGE_START"
    }
}
const getPage = (id) =>{
    return((dispatch)=>{
        dispatch(getPageStart())
        fetch(pageUrl+"/"+id+"/edit").then(res=>res.json()).then(
            obj =>{
                debugger
            }
        )
    })

}
const getPageStart = ()=>{
    return{
        type: "GET_PAGE_START"
    }
}
export {addPage}

let userPath = "http://localhost:3000/users"

function SIGN_UP (user) { 
    debugger
    let config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
              name: user.name,
              username: user.username,
              password: user.password  
          })}
          return ((dispatch) => {
            dispatch(SIGN_UP_START);
            fetch(userPath,config).then(res => res.json()).then(obj =>{
                let user =  obj.data.attributes
                localStorage.setItem("currentUser",user.id)
                dispatch({ type: 'SIGN_UP', user})});
          })
    
  }

function SIGN_UP_START(){
    return {
    type: "SIGN_UP_START"}
}
function LOG_IN_START(){
    return{
        type: "LOG_IN_START"
    }
}
const LOG_IN = (user)=>{

    return ((dispatch)=>{
        dispatch(LOG_IN_START);
        debugger
        fetch(userPath).then(res=>res.json()).then(user =>{
            dispatch({type: "LOG_IN"},user)
        })
    })
}
function SET_CURRENT_USER(){
    return{
        type: "SET_CURRENT_USER"
    }
}

export { LOG_IN,SIGN_UP, SIGN_UP_START }
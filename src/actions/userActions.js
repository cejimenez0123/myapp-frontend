

function SIGN_UP (user) { 
    debugger
    let config = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            Accept: "application/json"
          },
          body: JSON.stringify({
              name: user.name,
              username: user.username,
              password: user.password  
          })}
console.log("hit")
          return ((dispatch) => {
            dispatch(SIGN_UP_START);
            fetch("http://localhost:3000/users",config).then(res => res.json()).then(obj =>{
                debugger
            dispatch({ type: 'SIGN_UP', obj})});
          })
    
  

  }
function SIGN_UP_START(){
    return {
    type: "SIGN_UP_START"}
}

export {SIGN_UP,SIGN_UP_START}
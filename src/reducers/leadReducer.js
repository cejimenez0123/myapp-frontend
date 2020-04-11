
export default function leadReducer(
    state={users: [] , requesting: false},
    action){
        switch (action.type){
            case "SIGN_UP_START":
                debugger
                
                return {...state,users:[...state.users], requesting: true}
            case "SIGN_UP":
                debugger
                return {...state}
            case "SET_CURRENT_USER":
                return action.user
            default:
                return state
        }

}
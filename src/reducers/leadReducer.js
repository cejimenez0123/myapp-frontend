
import { history } from '../helpers/history'
export default function leadReducer(
    state={users: [],
        currentUser: null , requesting: false},
    action){
    
        switch (action.type){
            case "SIGN_UP_START":
                debugger
                
                return {...state,users:[...state.users], requesting: true}
            case "SIGN_UP":
                debugger
                
                let user = action.obj.data.attributes
                history.push(`/users/${user.id}`)
                return {...state, users: [...state.users,user], currentUser: user}
            default:
                return state
        }

}
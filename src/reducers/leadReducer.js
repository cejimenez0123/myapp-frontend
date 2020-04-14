
import { history } from '../helpers/history'

export default function leadReducer(
    state={users: [],
        currentUser: null,
    loggedIn: false },
    action){
    
        switch (action.type){
            case "SIGN_UP_START":
                
                return {...state,users:[...state.users]}
            case "SIGN_UP":    
                let user = action.user
                return {...state, users: [...state.users,user],
                    currentUser: user, loggedIn: true }
            default:
                return state
        }

}
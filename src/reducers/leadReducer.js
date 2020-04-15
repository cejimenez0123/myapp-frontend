
import { history } from '../helpers/history'

export default function leadReducer(
    state={users: [],
        currentUser: null,
    loggedIn: false },
    action){
    
        switch (action.type){
            case "SIGN_UP_START":
                
                return {...state,users:[...state.users],loggedIn: false}
            case "SIGN_UP":    
                let user = action.user
                return {...state, users: [...state.users,user],
                    currentUser: user, loggedIn: true }
            case "GET_USERS":
                
                return {...state, users: [action.users], currentUser: state.currentUser,
                loggedIn: state.loggedIn}
            case "GET_USERS_START":
                return{...state, users: [...state.users], currentUser: state.currentUser,
                    loggedIn: state.loggedIn}
            default:
                return state
        }

}
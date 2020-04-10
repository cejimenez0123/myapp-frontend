
export default function leadReducer(
    state={users: [] , requesting: false},
    action){
        switch (action.type){
            case "SIGN_UP_START":
                return state
            case "SIGN_UP":
                return {...state}
            default:
                return state
        }

}
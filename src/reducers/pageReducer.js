export default function pageReducer(
    state={pages:[]},
    action){
    
        switch (action.type){
            case "ADD_PAGE":
                debugger
                return {...state,pages:[...state.pages, action.page]}
            case "ADD_PAGE_START":
                return state
            default:
                return state
        }

}
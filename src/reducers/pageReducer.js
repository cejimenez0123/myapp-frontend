export default function pageReducer(
    state={pages:[], docSaved: false},
    action){
    
        switch (action.type){
            case "ADD_PAGE":
                return {...state,pages:[...state.pages, action.page],docSaved: true}
            case "ADD_PAGE_START":
                return {...state, docSaved: false}
            default:
                return state
        }

}
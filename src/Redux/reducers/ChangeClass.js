const initState = {
    RBClass : "search__before",
    RTClass : "search__before",
    searchClass : "search__beforeState",
    modeClass: "dark__mode",
    rowClass: "dark__modeRow",
    spinnerClass : "search__after"
};

const changeClass = (state = initState, action) =>{
    switch(action.type){
        case "Change__RBClass" : return {
            ...state,
            RBClass : action.payload
        }
        case "Change__RTClass" : return {
            ...state,
            RTClass : action.payload
        }
        case "Change__SearchClass" : return {
            ...state,
            searchClass : action.payload
        }
        case "Mode__Class" : return {
            ...state,
            modeClass : action.payload
        }
        case "Row__Class" : return {
            ...state,
            rowClass : action.payload
        }
        case "Change__SpinnerClass" : return {
            ...state,
            spinnerClass : action.payload
        }
        default : return state
    }
}

export default changeClass
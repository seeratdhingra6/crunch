const initState = {
    recordValue : "",
    finalValue : ""
};

const inputValue = (state = initState, action) =>{
    switch(action.type){
        case "Record__Input" : return {
            ...state,
            recordValue : action.payload
        }
        case "Final__Input" : return {
            ...state,
            finalValue : action.payload
        }
        default : return state
    }
}

export default inputValue
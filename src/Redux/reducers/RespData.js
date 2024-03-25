const initState = ""

const insertResp = (state = initState, action) =>{
    switch(action.type){
        case "Insert__Resp" : return  action.payload
        default : return state
    }
}

export default insertResp
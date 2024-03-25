import changeClass from "./ChangeClass";
import { combineReducers } from "redux";
import inputValue from "./InputValue";
import insertResp from "./RespData";

const rootReducer = combineReducers({
    currClass : changeClass,
    inputValue : inputValue,
    response : insertResp,
})

export default rootReducer
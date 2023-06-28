import { combineReducers } from "redux";
import todos from "../modules/reducer";

const rootReducer = combineReducers({ todos });
//여기에 state같은 데이터 객체형태로 넣음.

export default rootReducer;
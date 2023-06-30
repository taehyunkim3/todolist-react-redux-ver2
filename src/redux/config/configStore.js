import { combineReducers } from "redux";
import todos from "../modules/reducer";

const rootReducer = combineReducers({ todos });

export default rootReducer;
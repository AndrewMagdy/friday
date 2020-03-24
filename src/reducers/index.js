import { combineReducers } from "redux";
import carMake from "./carMake.reducer";
import carModel from "./carModel.reducer";

const rootReducer = combineReducers({ carMake, carModel });

export default rootReducer;

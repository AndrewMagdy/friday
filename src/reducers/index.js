import { combineReducers } from "redux";
import carMake from "./carMake.reducer";
import carModel from "./carModel.reducer";
import regVehicle from "./regVehicle.reducer";

const rootReducer = combineReducers({ carMake, carModel, regVehicle });

export default rootReducer;

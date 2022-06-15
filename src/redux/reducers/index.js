import {combineReducers} from "redux";
import {carReducer} from "./carReducer";

const reducers = combineReducers({
    allProducts: carReducer
});

export default reducers;
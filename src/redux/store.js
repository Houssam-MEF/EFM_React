import { combineReducers, createStore } from "redux";
import Reduc from "./Reducers/Reduc"


const store = createStore(combineReducers({Reduc}));

export default store;
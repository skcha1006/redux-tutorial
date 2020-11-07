import {combineReducers} from "redux";
import {productReducer} from "./product";
import {userReducer} from "./user";
import {playerReducer} from "./players";

export const allReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  playerReducer: playerReducer
});
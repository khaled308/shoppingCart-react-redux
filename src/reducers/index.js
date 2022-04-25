import { combineReducers } from "redux";
import { reducer } from "./cart.reducer";

export const reducers = combineReducers({
    cart : reducer
})
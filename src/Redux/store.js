import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { totalAmountReducer } from "./TotalAmount/totalAmountReducer";
import { tourReducer } from "./Tour Data/tourReducer";
import { userReducer } from "./User Data/userReducer";
import { tourDetailReducer } from "./Tour Detail/tourDetailReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  totalAmountReducer,
  tourReducer,
  userReducer,
  tourDetailReducer,
});
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
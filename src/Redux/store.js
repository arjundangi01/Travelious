import { legacy_createStore, combineReducers } from "redux";
import { totalAmountReducer } from "./TotalAmount/totalAmountReducer";
import { tourReducer } from "./Tour Data/tourReducer";
import { userReducer } from "./User Data/userReducer";
const rootReducer = combineReducers({
  totalAmountReducer,
  tourReducer,
  userReducer,
});
export const store = legacy_createStore(rootReducer);

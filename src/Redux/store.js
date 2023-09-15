import { legacy_createStore, combineReducers } from "redux";
import { totalAmountReducer } from "./TotalAmount/totalAmountReducer";
import { tourReducer } from "./Tour Data/tourReducer";
import { userReducer } from "./User Data/userReducer";
import { tourDetailReducer } from "./Tour Detail/tourDetailReducer";
import sessionReducer from "./sessionReducer";


const rootReducer = combineReducers({
  sessionReducer,
  totalAmountReducer,
  tourReducer,
  userReducer,
  tourDetailReducer,
});
 export const store = legacy_createStore(rootReducer);
// export const store = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

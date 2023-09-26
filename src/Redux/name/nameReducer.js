import {
    USER_LOGIN_ERROR,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGOUT,
} from "./action";
  
const initialState = {
   
    userName: "",
 
  };
const userReducer = (state = initialState, { type, payload }) => {
    console.log("user payload",payload)
    switch (type) {

      case USER_LOGIN_SUCCESS:
        return {
          ...state,
          userName:payload
        };
     
      case USER_LOGOUT: {
        return {...state,
            userName:""}
      }
      default:
        return state;
    }
  };
  
  export { userReducer };
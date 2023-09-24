import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from "./action";

const initialState = {
  isAuth:false,
  isLoading: false,
  isError: "",
  token: "",
  userTitle: "",
  email: "",
  UserData: {},
  bookingHistory: [],
};
const userReducer = (state = initialState, { type, payload }) => {
  console.log("user payload",payload)
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth:true,
        token: payload.token,
        userTitle:payload.userName,
        UserData: payload.data,
        bookingHistory: payload.bookingHistory,
        id:payload.id
      };
    case USER_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: payload };
    case USER_LOGOUT: {
      return {...state,   isAuth:false,
        isLoading: false,
        isError: "",
        token: "",
        userTitle: "",
        email: "",
        UserData: {},
        bookingHistory: [],}
    }
    default:
      return state;
  }
};

export { userReducer };

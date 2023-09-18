import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "./action";

const initialState = {
  isLoading: false,
  isError: "",
  token: "aby45kuf4ku",
  userTitle: "Arjun Dangi",
  email: "",
  UserData: {},
  bookingHistory: [],
};
const userReducer = (state = initialState, { type, payload }) => {
  // console.log("user payload",payload)
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        UserData: payload.data,
        bookingHistory: payload.data.bookingHistory,
      };
    case USER_LOGIN_ERROR:
      return { ...state, isLoading: false, isError: payload };
    default:
      return state;
  }
};

export { userReducer };

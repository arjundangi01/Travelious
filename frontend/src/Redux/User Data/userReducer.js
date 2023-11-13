import {
  GET_USER,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_NOT_LOGIN,
} from "./action";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  isBookingLoading: false,
  isBookingUpdateLoading: false,
  isProfileLoading: false,
  isError: "",
  token: "",
  userTitle: "",
  email: "",
  UserData: {},
  bookingHistory: [],
};
const userReducer = (state = initialState, { type, payload }) => {
  console.log("user payload", payload);
  switch (type) {
    case USER_LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        token: payload.userToken,
      };
    case USER_LOGOUT:
      return initialState;
    case USER_NOT_LOGIN:
      return { ...state, isLoading: false };
    case USER_LOGIN_ERROR:
      return {
        ...state,
        userTitle: "",
        UserData: "",
        email: "",
        isAuthenticated: "",
        bookingHistory: "",
        isLoading: false,
        isError: true,
      };

    case GET_USER: {
      return {
        ...state,
        userTitle: payload.userData.userName,
        UserData: payload.userData,
        email: payload.userData.email,
        isAuthenticated: true,
        bookingHistory: payload.bookingHistory,
        isLoading: false,
        isBookingLoading: false,
        isBookingUpdateLoading: false,
        isProfileLoading: false,
      };
    }
    case "isLoadingTrue": {
      return {
        ...state,
        isBookingLoading: true,
      };
    }
    case "isLoadingFalse": {
      return {
        ...state,
        isBookingLoading: false,
      };
    }
    case "isBookingLoadingTrue": {
      return {
        ...state,
        isBookingUpdateLoading: true,
      };
    }
    case "isBookingLoadingFalse": {
      return {
        ...state,
        isBookingUpdateLoading: false,
      };
    }
    case "isProfileLoadingTrue": {
      return {
        ...state,
        isProfileLoading: true,
      };
    }
    case "isProfileLoadingFalse": {
      return {
        ...state,
        isProfileLoading: false,
      };
    }
    default:
      return state;
  }
};

export { userReducer };

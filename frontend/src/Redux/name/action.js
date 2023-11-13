// user Data action
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_SIGNUP = "USER_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";


export const nameUserAction = () => async (dispatch) => {
    dispatch({ type: USER_LOGOUT });
  };
import axios from "axios";

// user Data action
export const USER_NOT_LOGIN = "USER_NOT_LOGIN";
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_SIGNUP = "USER_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";
export const GET_USER = "GET_USER";

export const updateBookingStatusAction =
  ({ index, obj }, refundAmount) =>
  async (dispatch) => {
    try {
      dispatch({ type: "isBookingLoadingTrue" });

      var cancelDate = new Date().toLocaleDateString();
      const newObj = { ...obj, status: false, refundAmount, cancelDate };
      let userToken = localStorage.getItem("traveliousUserToken");
      const header = {
        Authorization: `bearer ${userToken}`,
      };
      const response = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/travelious_tour`,
        newObj,
        {
          headers: header,
        }
      );

      dispatch({ type: "isBookingLoadingFalse" });

      dispatch(getUserDetailAction());
    } catch (error) {}
  };

export const newBookingAction = (newObj) => async (dispatch) => {
  // const id = newObj.id

  try {
    let userToken = localStorage.getItem("traveliousUserToken");
    const header = {
      Authorization: `bearer ${userToken}`,
    };
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/travelious_tour`,
      newObj,
      {
        headers: header,
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: "isProfileLoadingFalse" });
};

export const getUserDetailAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });
  try {
    let userToken = localStorage.getItem("traveliousUserToken");
    if (userToken) {
      const header = {
        Authorization: `bearer ${userToken}`,
      };
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/travelious_user`,
        {
          headers: header,
        }
      );
      dispatch({ type: "isProfileLoadingFalse" });
      dispatch({ type: GET_USER, payload: response.data });
      dispatch({ type: "isLoadingFalse" });
    } else {
      dispatch({ type: USER_NOT_LOGIN });
    }
  } catch (error) {
    dispatch({ type: USER_LOGIN_ERROR });
  }
};

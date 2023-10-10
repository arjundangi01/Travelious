import axios from "axios";

// user Data action
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_SIGNUP = "USER_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";


export const getUserAction =
  ({ email, name, nickname, picture, sub }) =>
  async (dispatch) => {
    // console.log("gg")
    try {
      const response = await axios.get(
        `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser?token=${email}`
      );
      console.log("res", response.data[0]);
      if (!response.data[0] || response.data[0] == "undefined") {
        const newObj = {
          userName: nickname,
          token:email,
          data: { email, nickname, picture },
          bookingHistory: [],
        }
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: newObj,
        });
        const response = await axios.post(
          `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser/`,
          newObj
        );
        
      } else {
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: response.data[0],
        });
      }
      
    } catch (error) {
      console.log("error", error);
    }
  };
export const updateBookingStatusAction =  ({ index, obj }) =>
  async (dispatch) => {
    // console.log("gg", selected)
    // console.log(obj.token);
    const id = obj.id;
    const newObj = {
      ...obj,
    };
    console.log("new", newObj);
    const refundAmount = parseInt(
      Math.round((newObj.bookingHistory[index].cost * 80) / 100)
    );
    var cancelDate = new Date().toLocaleDateString();
    newObj.bookingHistory[index].status = false;
    newObj.bookingHistory[index]["refundAmount"] = refundAmount;
    newObj.bookingHistory[index]["cancelDate"] = cancelDate;
    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: newobj,
    // });
    // console.log(obj, id);
    const newObj2 = { ...obj };
    newObj2.bookingHistory[index].status = false;
    newObj2.bookingHistory[index]["refundAmount"] = refundAmount;
    newObj2.bookingHistory[index]["cancelDate"] = cancelDate;
    console.log( "newObj", newObj)
    try {
      const response = await axios.patch(
        `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser/${id}`,
        newObj
      );
    } catch (error) {}
  };

export const newBookingAction = (newObj, id) => async (dispatch) => {
  // const id = newObj.id
  // console.log(newObj.id)
  try {
    const response = await axios.patch(
      `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser/${id}`,
      newObj
    );
  } catch (error) {}
};
export const newUserSignupAction = (newObj) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_SUCCESS,
    payload: newObj,
  });
  console.log("called this")
  try {
    const response = await axios.post(
      `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser/`,
      newObj
    );
  } catch (error) {}
};
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

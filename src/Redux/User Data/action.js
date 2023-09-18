import axios from "axios";

// user Data action
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";

export const getUserAction = (token) => async (dispatch) => {
  // console.log("gg")
  try {
    const response = await axios.get(
      `https://fair-teal-worm-gown.cyclic.cloud/traveliousUser?token=${token}`
    );
    // console.log("res", response.data);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { token, data: response.data[0] },
    });
  } catch (error) {}
};
export const updateBookingStatusAction =
  ({ index, obj }) =>
  async (dispatch) => {
    // console.log("gg", selected)
    // console.log(obj.token);
    const id = obj.id;
    const newObj = {
      ...obj
    };
    console.log("new", newObj);
    const refundAmount = parseInt (Math.round(newObj.bookingHistory[index].cost* 80 / 100));
    var cancelDate = new Date().toLocaleDateString();
    newObj.bookingHistory[index].status = false;
    newObj.bookingHistory[index]["refundAmount"] = refundAmount;
    newObj.bookingHistory[index]["cancelDate"] = cancelDate;
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: { token: obj.token, data: newObj },
    });
    // console.log(obj, id);
    // console.log(newObj)
    try {
      const response = await axios.patch(
        `https://fair-teal-worm-gown.cyclic.cloud/traveliousUser/${id}`,
        newObj
      );
    } catch (error) {}
  };

export const newBookingAction = (newObj) => async (dispatch) => {
  const id = newObj.id
  console.log(newObj.id)
  try {
    const response = await axios.patch(
      `https://fair-teal-worm-gown.cyclic.cloud/traveliousUser/${id}`,
      newObj
    );
  } catch (error) {}
};

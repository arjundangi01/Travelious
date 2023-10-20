import axios from "axios";

// user Data action
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_ERROR = "USER_LOGIN_ERROR";
export const USER_SIGNUP = "USER_LOGIN_ERROR";
export const USER_LOGOUT = "USER_LOGOUT";
export const GET_USER = "GET_USER";


// export const getUserAction =  ({ email, name, nickname, picture, sub }) =>
//   async (dispatch) => {
//     // console.log("gg")
//     try {
//       const response = await axios.get(
//         `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser?token=${email}`
//       );
//       console.log("res", response.data[0]);
//       if (!response.data[0] || response.data[0] == "undefined") {
//         const newObj = {
//           userName: nickname,
//           token: email,
//           data: { email, nickname, picture },
//           bookingHistory: [],
//         };
//         dispatch({
//           type: USER_LOGIN_SUCCESS,
//           payload: newObj,
//         });
//         const response = await axios.post(
//           `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser/`,
//           newObj
//         );
//       } else {
//         dispatch({
//           type: USER_LOGIN_SUCCESS,
//           payload: response.data[0],
//         });
//       }
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
export const updateBookingStatusAction =({ index, obj },refundAmount) =>  async (dispatch) => {
  try {
    var cancelDate = new Date().toLocaleDateString();
    const newObj = { ...obj, status: false ,refundAmount,cancelDate}
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
    console.log(response)
    dispatch(getUserDetailAction())
    } catch (error) {}
  };

export const newBookingAction = (newObj) => async (dispatch) => {
  // const id = newObj.id
  // console.log(newObj.id)
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
    console.log("response for newBookingAction", response);
  } catch (error) {
    console.log(error);
  }
};
// export const newUserSignupAction = (newObj) => async (dispatch) => {
//   dispatch({
//     type: USER_LOGIN_SUCCESS,
//     payload: newObj,
//   });
//   console.log("called this");
//   try {
//     const response = await axios.post(
//       `https://dull-puce-crocodile-wear.cyclic.app/traveliousUser/`,
//       newObj
//     );
//   } catch (error) {}
// };
export const userLogoutAction = () => async (dispatch) => {
  dispatch({ type: USER_LOGOUT });
};

export const getUserDetailAction = () => async (dispatch) => {
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
      dispatch({ type: GET_USER, payload: response.data });
      console.log(response);
    }
  } catch (error) {}
};

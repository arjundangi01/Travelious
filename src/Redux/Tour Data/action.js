// Tour Data Action
import axios from "axios"
export const ADD_TOUR_REQUEST = "ADD_TOUR_REQUEST"
export const ADD_TOUR_SUCCESS = "ADD_TOUR_SUCCESS"
export const ADD_TOUR_FAILURE = "ADD_TOUR_FAILURE"
export const UPDATE_TOUR_DATA = "UPDATE_TOUR_DATA";


//Add tour
export const addTour = (render, sortOrder = 'asc', country = '') => async (dispatch) => {
    try {
      let apiUrl = `https://dull-puce-crocodile-wear.cyclic.app/tours?_limit=12&_page=${render}&_sort=cost&_order=${sortOrder}`;
      
      if (country) {
        apiUrl += `&Country=${country}`;
      }
  
      dispatch({ type: ADD_TOUR_REQUEST });
      const res = await axios.get(apiUrl);
      const data = res.data;
      dispatch({ type: ADD_TOUR_SUCCESS, payload: data });
    } catch (error) {
      console.log("fetching error!");
      dispatch({ type: ADD_TOUR_FAILURE });
    }
  };

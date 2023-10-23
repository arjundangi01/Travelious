// Tour Data Action
import axios from "axios"
export const ADD_TOUR_REQUEST = "ADD_TOUR_REQUEST"
export const ADD_TOUR_SUCCESS = "ADD_TOUR_SUCCESS"
export const ADD_TOUR_FAILURE = "ADD_TOUR_FAILURE"
export const UPDATE_TOUR_DATA = "UPDATE_TOUR_DATA";


//Add tour
export const addTour = (render, sortOrder , country ) => async (dispatch) => {
    try {
      // let apiUrl = `https://dull-puce-crocodile-wear.cyclic.app/tours?_limit=12&_page=${render}&_sort=cost&_order=${sortOrder}`;
      let apiUrl = `${process.env.REACT_APP_BASE_URL}/travelious_tour?page=${render}`
      if (country) {
        apiUrl += `&Country=${country}`;
      }
      if (sortOrder) {
        apiUrl += `&sort=${sortOrder}`;
      }
  
      dispatch({ type: ADD_TOUR_REQUEST });
      const res = await axios.get(apiUrl);
      const data = res.data;
      console.log('res',data)

      dispatch({ type: ADD_TOUR_SUCCESS, payload: {tours:data.tourData,totalPage:data.totalPage} });
    } catch (error) {
      console.log("fetching error!");
      dispatch({ type: ADD_TOUR_FAILURE });
    }
  };

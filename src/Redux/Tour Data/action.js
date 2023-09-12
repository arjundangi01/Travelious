// Tour Data Action
import axios from "axios"
export const ADD_TOUR_REQUEST = "ADD_TOUR_REQUEST"
export const ADD_TOUR_SUCCESS = "ADD_TOUR_SUCCESS"
export const ADD_TOUR_FAILURE = "ADD_TOUR_FAILURE"



//Add tour

export const addTour =() => async (dispatch) => {
    try {
        dispatch({type : ADD_TOUR_REQUEST})
        const res = await axios.get("https://fair-teal-worm-gown.cyclic.cloud/tours")
        const data = res.data
        // console.log(data);
        dispatch({type : ADD_TOUR_SUCCESS,payload : data})
        
    } catch (error) {
        console.log("fetching error!");
        dispatch({type : ADD_TOUR_FAILURE})
        
    }
}

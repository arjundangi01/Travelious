import { ADD_TOUR_FAILURE, ADD_TOUR_REQUEST, ADD_TOUR_SUCCESS } from "./action";

const initialState = {
    tours : [],
    isLoading : false,
    isError : false,
  };
  const tourReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TOUR_REQUEST : return {...state,isLoading:true}
      case ADD_TOUR_SUCCESS : return {...state,isLoading:false, tours : payload}
      case ADD_TOUR_FAILURE : return {...state,isLoading:false}

      default : return state
    }
  };
  
  export { tourReducer };
  
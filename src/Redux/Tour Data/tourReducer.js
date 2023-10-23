import { ADD_TOUR_FAILURE, ADD_TOUR_REQUEST, ADD_TOUR_SUCCESS, UPDATE_TOUR_DATA } from "./action";

const initialState = {
    tours : [],
    isLoading : false,
  isError: false,
    totalPage:0
  };
  const tourReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ADD_TOUR_REQUEST : return {...state,isLoading:true}
      case ADD_TOUR_SUCCESS : return {...state,isLoading:false, tours : payload.tours,totalPage:payload.totalPage}
      case ADD_TOUR_FAILURE : return {...state,isLoading:false}
      case UPDATE_TOUR_DATA : return {...state,tours: payload.tours};
      default : return state
    }
  };
  
  export { tourReducer };
  
import axios from "axios"

//tourdetail
export const GET_SINGLE_TOUR_REQUEST = "GET_SINGLE_TOUR_REQUEST"

export const singleTour = (id) => async (dispatch) => {
    try {
        console.log(id)
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/travelious_tour/${id}`)
        console.log(response)
        dispatch({type:GET_SINGLE_TOUR_REQUEST,payload:response.data})
    } catch (error) {
        
    }
}
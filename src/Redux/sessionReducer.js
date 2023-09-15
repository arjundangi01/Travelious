import { LOGIN_SUCCESS } from "./actionTypes";

const initialstate = {
	isLoggedIn: false
};

const sessionReducer = (state = initialstate, action) => {
	switch(action.type){
		case LOGIN_SUCCESS:
			// console.log("logged in");
			return {
				...state,
				isLoggedIn: true,
			}


		default: 
			return state;
	}
}


export default sessionReducer;
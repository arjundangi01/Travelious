// Total Amount actions

export const MAKE_PAYMENT = "MAKE_PAYMENT";

export const moveToPaymentAction = (id) => (dispatch) => {
    dispatch({type:MAKE_PAYMENT,id})
}


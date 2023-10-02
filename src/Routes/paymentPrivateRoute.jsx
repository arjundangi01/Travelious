import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

const PaymentPrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((store) => store.userReducer);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  
  // if (!isAuth) {
  //   return <Navigate to="/signup" />
  // }
  return children
  
}

export default PaymentPrivateRoute
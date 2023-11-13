import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProfilePrivateRoute = ({ children }) => {
  const {isAuth} = useSelector((store) => store.userReducer);

  // if (!isAuth) {
  //   return <Navigate to="/signup" />
  // }
  return children;
};

export default ProfilePrivateRoute;

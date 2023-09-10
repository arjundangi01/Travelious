import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home Page/home";
import Login from "../Pages/Login Page/login";
import Signup from "../Pages/Login Page/signup";
import Tour from "../Pages/Tour Page/tour";
import TourDetail from "../Pages/Detail Page/tourDetail";
import PaymentConfirm from "../Pages/Payment Page/paymentConfirm";
import Payment from "../Pages/Payment Page/payment";
import Profile from "../Pages/Profile and History/Profile";
import ProfilePrivateRoute from "./profilePrivateRoute"
import PaymentPrivateRoute from "./paymentPrivateRoute"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} >Home</Route>
      <Route path="/login" element={<Login/>} >Login</Route>
      <Route path="/signup" element={<Signup/>} >Signup</Route>
      <Route path="/profile" element={<ProfilePrivateRoute> <Profile/> </ProfilePrivateRoute>} >Profile</Route>
      <Route path="/tour" element={<Tour/>} >Tour Page</Route>
      <Route path="/tour/:id" element={<TourDetail/>} >Tour Detail Page</Route>
      <Route path="/payment" element={<PaymentPrivateRoute> <Payment/> </PaymentPrivateRoute>}  >Payment Page</Route>
      <Route path="/payment/confirm" element={<PaymentConfirm/>} >Payment Confirm Page</Route>
    </Routes>
  );
};

export default AllRoutes;

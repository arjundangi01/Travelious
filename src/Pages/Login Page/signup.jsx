import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { newUserSignupAction } from "../../Redux/User Data/action";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
import style from "./signup.module.css";

export const SignUp = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const containerStyle = {
    // backgroundColor: '#185e49',
    fontFamily: "fjalla One, sans-serif",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "90vh",
    margin: "0",
  };

  const signupContainerStyle = {
    backgroundColor: "#f9ae05",
    borderRadius: "10px",
    padding: "20px",
    width: "300px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  };

  const signupHeaderStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#185e49",
    fontSize: "24px",
  };

  const inputGroupStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    color: "#185e49",
    fontWeight: "bold",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    border: "1px solid #185e49",
    borderRadius: "5px",
  };

  const signupButtonStyle = {
    backgroundColor: "#f05a1f",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "10px 15px",
    cursor: "pointer",
    width: "100%",
    fontWeight: "bold",
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp();
    dispatch(
      newUserSignupAction({
        userName: username,
        token: email,
        bookingHistory: [],
      })
    );
    navigate("/Login");
  };

  const signUp = () => {
    axios.post("http://localhost:8080/users", {
      username: username,
      email: email,
      password: password,
    });
  };

  return (
    <>
      <Navbar />
      <div style={containerStyle} className={style.parent}>
        <div style={signupContainerStyle}>
          <h2 style={signupHeaderStyle}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div style={inputGroupStyle}>
              <label htmlFor="username" style={labelStyle}>
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                required
                style={inputStyle}
                value={username}
                onChange={handleUsername}
              />
            </div>
            <div style={inputGroupStyle}>
              <label htmlFor="email" style={labelStyle}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={inputStyle}
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div style={inputGroupStyle}>
              <label htmlFor="password" style={labelStyle}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                style={inputStyle}
                value={password}
                onChange={handlePassword}
              />
            </div>
            <button type="submit" style={signupButtonStyle}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <div style={{ width: "100%", margin: "auto", backgroundColor:"#ffe5d1" }}>
        <Footer />
      </div>
    </>
  );
};

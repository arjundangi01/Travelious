import React, { useState } from "react";
import axios from "axios";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import style from "./signup.module.css";
import Navbar from "../../Components/navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TwinSpin } from "react-cssfx-loading";
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_NOT_LOGIN,
} from "../../Redux/User Data/action";
import "../../index.css";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import LoginAlert from "../../Components/loginAlert";
import { useDisclosure, useToast } from "@chakra-ui/react";
let initialSignupObj = {
  userName: "",
  email: "",
  password: "",
};
let initialLoginObj = {
  email: "",
  password: "",
};

export const SignUp = () => {
  const [alert, setAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [signupObj, setSignupObj] = useState(initialSignupObj);
  const [loginObj, setLoginObj] = useState(initialLoginObj);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const toastFuntion = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  
  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const { isLoading } = useSelector((store) => store.userReducer);

  const handleSignupInputChange = (e) => {
    const { value, name } = e.target;
    setSignupObj({ ...signupObj, [name]: value });
  };
  const handleLoginInputChange = (e) => {
    const { value, name } = e.target;
    setLoginObj({ ...loginObj, [name]: value });
  };
  const onSignup = async () => {
    dispatch({ type: USER_LOGIN_REQUEST });
    setAlert(false);
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/travelious_user/signup`,
      signupObj
    );
    if (response.data.message == "User Is Already Registered") {
      dispatch({ type: USER_NOT_LOGIN });
      setAlert(true);
      setAlertMessage("User Is Already Registered");
      return;
    }
    toastFuntion()
    dispatch({ type: USER_NOT_LOGIN });
    console.log(response.data);
    handleJustifyClick("tab1");
  };

  const onLogin = async () => {
    dispatch({ type: USER_LOGIN_REQUEST });
    setAlert(false);

    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/travelious_user/login`,
      loginObj
    );
    console.log(response.data);
    if (response.data.message == "Entered Wrong Credentials") {
      dispatch({ type: USER_NOT_LOGIN });
      setAlert(true);
      // return alert("Entered Wrong Credentials");
      setAlertMessage("Entered Wrong Credentials");
      return;
    } else if (response.data.message == "user not found") {
      dispatch({ type: USER_NOT_LOGIN });
      setAlert(true);
      setAlertMessage("User not Found");

      // return alert("user not found");
      return;
    }
    setAlert(false);

    localStorage.setItem("traveliousUserToken", response.data.userToken);
    dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data });

    navigate("/");
  };
  return (
    <>
      <Navbar />
      <div className={`${style.parent}`}>
        <MDBContainer className="p-3 my-5  d-flex flex-column  ">
          <MDBTabs
            pills
            justify
            className="mb-3 my-5  d-flex flex-row justify-content-between"
          >
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab1")}
                active={justifyActive === "tab1"}
              >
                Login
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleJustifyClick("tab2")}
                active={justifyActive === "tab2"}
              >
                Register
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>

          <MDBTabsContent>
            <MDBTabsPane show={justifyActive === "tab1"}>
              <div className="text-center mb-3"></div>

              <MDBInput
                wrapperClass="mb-4"
                label="Email address"
                id="form1"
                type="email"
                name="email"
                onChange={handleLoginInputChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="form2"
                type="text"
                name="password"
                onChange={handleLoginInputChange}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn onClick={onLogin} className="mb-4 w-100 bg-warning">
                Sign in
              </MDBBtn>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center mb-3"></div>

              <MDBInput
                wrapperClass="mb-4"
                name="userName"
                label="Full Name"
                id="form1"
                type="text"
                onChange={handleSignupInputChange}
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                name="email"
                id="form1"
                type="email"
                onChange={handleSignupInputChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                name="password"
                id="form1"
                type="password"
                onChange={handleSignupInputChange}
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  id="flexCheckDefault"
                  label="I have read and agree to the terms"
                />
              </div>

              <MDBBtn onClick={onSignup} className="mb-4 w-100 bg-warning">
                Sign up
              </MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
      {isLoading ? (
        <div className="loading_center">
          <TwinSpin />
        </div>
      ) : (
        ""
      )}
      {alert ? <LoginAlert message={alertMessage} /> : ""}
    </>
  );
};

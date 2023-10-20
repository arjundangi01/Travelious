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
import { useDispatch } from "react-redux";
import { USER_LOGIN_SUCCESS } from "../../Redux/User Data/action";

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
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [signupObj, setSignupObj] = useState(initialSignupObj);
  const [loginObj, setLoginObj] = useState(initialLoginObj);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleSignupInputChange = (e) => {
    const { value, name } = e.target
    setSignupObj({...signupObj,[name]:value})
    
  };
  const handleLoginInputChange = (e) => {
    const { value, name } = e.target
    setLoginObj({...loginObj,[name]:value})

  };
  const onSignup = async() => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/travelious_user/signup`,signupObj);
    console.log(response.data)
    handleJustifyClick("tab1")
  }
  const onLogin = async () => {
    const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/travelious_user/login`,loginObj);
    console.log(response.data)
    if (response.data.message == 'Entered Wrong Credentials') {
      return alert('Entered Wrong Credentials')
    } else if(response.data.message=='user not found')  {
      return alert('user not found')
    }
    localStorage.setItem('traveliousUserToken', response.data.userToken)
    dispatch({type:USER_LOGIN_SUCCESS,payload:response.data})
    
    navigate('/')

  }
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
              <div className="text-center mb-3">
                <p>Sign in with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

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

              <MDBBtn onClick={onLogin} className="mb-4 w-100 bg-warning">Sign in</MDBBtn>
            </MDBTabsPane>

            <MDBTabsPane show={justifyActive === "tab2"}>
              <div className="text-center mb-3">
                <p>Sign un with:</p>

                <div
                  className="d-flex justify-content-between mx-auto"
                  style={{ width: "40%" }}
                >
                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="m-1"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>

                <p className="text-center mt-3">or:</p>
              </div>

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

              <MDBBtn onClick={onSignup} className="mb-4 w-100 bg-warning">Sign up</MDBBtn>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBContainer>
      </div>
    </>
  );
};

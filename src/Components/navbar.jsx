import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Components styles/navbar.module.css";
import { LuMenuSquare } from "react-icons/lu";
import logoImg from "../Images/LOGO.PNG";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserAction,
  newUserSignupAction,
  userLogoutAction,
} from "../Redux/User Data/action";
const Navbar = () => {
  const dispatch = useDispatch();
  // const [login, setLogin] = useState(true);
  const { isAuth: login, userTitle } = useSelector(
    (store) => store.userReducer
  );
  console.log(login);
  const onLogout = () => {
    dispatch(userLogoutAction());
  };
  const [toggle, setToggle] = useState(false);
  const [userName, setUserName] = useState(null);
  const [token, setToken] = useState(null);
  // auth
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log(user, loginWithRedirect);
  useEffect(() => {
    if (user) {
      const { email, name, nickname, picture, sub } = user;
     
      setUserName(nickname);
      setToken(sub);
      dispatch(getUserAction(user))
      // dispatch(
      //   newUserSignupAction({
      //     userName: nickname,
      //     token:email,
      //     data: { email, nickname, picture },
      //     bookingHistory: [],
      //   })
      // );
      console.log("done sign");
    }
  }, [user]);

  return (
    <nav class="navbar navbar-expand-lg fixed-top " id={style.navbar}>
      <div class="container-fluid ps-lg-5 pe-lg-5 pe-md-0 ps-md-0  ">
        <Link to="/" class="navbar-brand" href="#">
          <img src={logoImg} alt="" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 w-75 d-flex justify-content-around">
            <li class="nav-item">
              <Link
                to="/tour"
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Discover
              </Link>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Service
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-light text-light"
                aria-current="page"
                href="#"
              >
                Community
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                About Us
              </a>
            </li>
          </ul>

          <form class=" gap-5 d-lg-flex d-sm-block me-5 " role="search">
            {isAuthenticated && (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                  <a
                    class="nav-link text-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userName}
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <Link
                        to={`/profile/${token}`}
                        class="dropdown-item"
                        href="#"
                      >
                        Profile
                      </Link>
                    </li>

                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        onClick={() => logout()}
                        class="dropdown-item"
                        href="#"
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            )}
            {!isAuthenticated && (
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link
                    onClick={() => {
                      loginWithRedirect();
                    }}
                    class="nav-link active text-light"
                    aria-current="page"
                    href="#"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
            {!isAuthenticated && (
              <button
                onClick={() => {
                  loginWithRedirect();
                }}
                className={`btn btn-outline-success ${style.registered_button}`}
                type="submit"
              >
                Register
              </button>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

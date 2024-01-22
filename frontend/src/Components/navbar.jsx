import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Components styles/navbar.module.css";
import { LuMenuSquare } from "react-icons/lu";
import logoImg from "../Images/LOGO.PNG";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from '@chakra-ui/react'
import {
  USER_LOGOUT,
  
  getUserDetailAction,
  
  userLogoutAction,
} from "../Redux/User Data/action";
import { nameUserAction } from "../Redux/name/action";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isAuthenticated, userTitle, email ,isLoading,isProfileLoading} = useSelector(
    (store) => store.userReducer
  );
  
 
 
  useEffect(() => {
    dispatch(getUserDetailAction());
    let userToken = localStorage.getItem("traveliousUserToken");
    if (userToken && !isAuthenticated ) {
      dispatch({ type: "isProfileLoadingTrue" });
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem('traveliousUserToken')
    dispatch(userLogoutAction())
    navigate('/')
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top " id={style.navbar}>
      <div className="container-fluid ps-lg-5 pe-lg-5 pe-md-0 ps-md-0  ">
        <Link to="/" className="navbar-brand" href="#">
          <img src={logoImg} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-75 d-flex justify-content-around">
            <li className="nav-item">
              <Link
                to="/tour"
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Service
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light text-light"
                aria-current="page"
                href="#"
              >
                Community
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                About Us
              </a>
            </li>
          </ul>
          {
            isProfileLoading ? (<Spinner/>) :(<form className=" gap-5 d-lg-flex d-sm-block me-5 " role="search">
            {isAuthenticated && (
              <ul className="navbar-nav me-5 mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link text-light dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {isAuthenticated ? userTitle : ""}
                  </a>
                  <ul className="dropdown-menu  ">
                    <li>
                      <Link to={`/profile`} className="dropdown-item" href="#">
                        Profile
                      </Link>
                    </li>

                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a
                        onClick={() => onLogout()}
                        className="dropdown-item"
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
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="/signup"
                  >
                    Login
                  </Link>
                </li>
              </ul>
            )}
            {!isAuthenticated && (
              <Link to="/signup">
                <button
                  className={`btn btn-outline-success ${style.registered_button}`}
                  type="submit"
                >
                  Register
                </button>
              </Link>
            )}
          </form>)
           }
          
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Navbar);

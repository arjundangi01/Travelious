import React, { useState } from "react";
import style from "./Components styles/navbar.module.css";
import { LuMenuSquare } from "react-icons/lu";
import logoImg from "../Images/LOGO.PNG";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [login, setLogin] = useState(true);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="d-flex justify-content-between fixed-top  align-items-center"
        id={style.navbar}
      >
        <div>
          <Link to="/" >
            <img src={logoImg} alt="" />
            </Link>
        </div>

        <div
          className=" align-items-center justify-content-around w-75"
          id={style.menu}
        >
          <Link to="/tour" className="nav-link active" aria-current="page" href="#">
            Discover
          </Link>
          <a className="nav-link active" aria-current="page" href="#">
            Service
          </a>
          <a className="nav-link active" aria-current="page" href="#">
            Community
          </a>
          <a className="nav-link active" aria-current="page" href="#">
            About Us
          </a>
        </div>
        {/*  */}
        <div className={`${style.right_menu}`}>
          {!login && (
            <div className={`${style.log_reg_div}`}>
              <a className="nav-link active" aria-current="page" href="#">
                Login
              </a>
              <button
                className={style.registered_button}
                onClick={() => setLogin(true)}
              >
                Register
              </button>
            </div>
          )}
          {/*  */}
          {login && (
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              User
            </a>
          )}
          {login && (
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>

              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  onClick={() => setLogin(false)}
                  className="dropdown-item"
                  href="#"
                >
                  Logout
                </a>
              </li>
            </ul>
          )}
          <div className={`${style.hamburger} `}>
            <LuMenuSquare onClick={() => setToggle(!toggle)} />
          </div>
        </div>
      </div>
      {toggle && (
        <div className={`${style.sidebar}`}>
          <div className={`${style.sidebar_menu}`} >
            <a className="nav-link active" aria-current="page" href="#">
              Discover
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Service
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              Community
            </a>
            <a className="nav-link active" aria-current="page" href="#">
              About Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState } from "react";
import style from "./Components styles/navbar.module.css";
import logoImg from "../Images/LOGO.PNG";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [login, setLogin] = useState(true);
  return (
    <div  className="d-flex justify-content-between  p-3 ps-5 pe-5 align-items-center" id={style.navbar} >
      <div>
        <img src={logoImg} alt="" />
      </div>
     
      <div className="d-flex justify-content-around w-75"  >
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
        {!login && (
          <a className="nav-link active" aria-current="page" href="#">
            Login
          </a>
        )}
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
        { login &&  <ul className="dropdown-menu">
          <li>
            <Link className="dropdown-item"  href="#">
              Profile
            </Link>
          </li>

          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a  onClick={()=>setLogin(false)} className="dropdown-item" href="#">
              Logout
            </a>
          </li>
        </ul>}
        {!login && <button onClick={()=>setLogin(true)} >Register</button>}
      </div>
    </div>
  );
};

export default Navbar;

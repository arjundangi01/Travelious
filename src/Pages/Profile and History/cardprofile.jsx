import React from "react";
import { BiUserCircle } from "react-icons/bi";
import style from "./styles/cardprofile.module.css";
const Cardprofile = () => {
  return (
    <div className={style.container}>
      <div>
        <BiUserCircle />
      </div>
      <div>
        <h3>Arjun Dangi</h3>
        <p><span>@</span>arjun01</p>
      </div>
    </div>
  );
};

export default Cardprofile;

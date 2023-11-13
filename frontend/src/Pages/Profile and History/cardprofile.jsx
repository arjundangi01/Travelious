import React from "react";
import { BiUserCircle } from "react-icons/bi";
import style from "./styles/cardprofile.module.css";
import { useSelector } from "react-redux";
const Cardprofile = () => {
  const initialObj = useSelector((store) => store.userReducer);
 console.log(initialObj)
//  console.log("hii")
  return ( 
    <div className={style.container}>
      <div>
        <BiUserCircle />
      </div>
      <div>
        <h3>{initialObj.userTitle}</h3>
     
      </div>
    </div>
  );
};

export default Cardprofile;

import React from "react";
import style from "./style/section1.module.css";
import boyImg from "./images/Boy.PNG";
import chianImg from "./images/Chain.PNG";
import { SearchBar } from "../Tour Page/Components/SearchBar";
const Section1 = () => {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.left}>
          <div className={style.left_top}>
            <h1>LIVE YOUR </h1>
            <h1>ADVENTURE </h1>
          </div>
          <div className={style.left_middle}>
            <p>
              Don't wait until tomorrow. discover your adventure now and the
              sensation ot closeness to nature around you
            </p>
          </div>
          <div>
         
          </div>
        </div>
        <div className={style.right}>
          <img src={boyImg} alt="" />
        </div>
      </div>
     
    </div>
  );
};

export default Section1;

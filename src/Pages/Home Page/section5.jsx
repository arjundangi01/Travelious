import React from "react";
import style from "./style/section5.module.css";
import blogImg from "./images/Blog.PNG"
import girlImg from "./images/Girl.PNG"
const Section5 = () => {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.left}>
          <div>
            <h1>WHAT ADVENTURE</h1>
            <h1><span>SAYS ABOUT US</span></h1>
          </div>
          <div className={style.left_middle} >
            <p>
              See and discover what adventures tell us about their journey with
              us, we always listen to whatever experience they have to say
            </p>
          </div>
          <div className={style.left_last} >
            <img src={blogImg } alt="" />
          </div>
        </div>
        <div className={style.right}>
          <img src={girlImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section5;

import React from "react";
import style from "./style/intro.module.css";
const Intro = ({ data }) => {
  return (
    <div className={style.container}  >
      <h1>{data.name}</h1>
      <h3>{data.description}</h3>
    </div>
  );
};

export default Intro;

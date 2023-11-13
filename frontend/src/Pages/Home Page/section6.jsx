import React from "react";
import style from "./style/section6.module.css"

const Section6 = () => {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <h1>
          Get Started With <span>Travelious</span>{" "}
        </h1>
        <p>
          Subscribe and find super attractive price quotes from us, we wait for
          you at the best destination
        </p>
        <button>Get Started</button>
      </div>
    </div>
  );
};

export default Section6;

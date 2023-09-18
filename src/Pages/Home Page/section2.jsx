import React from "react";
import style from "./style/section2.module.css";
import TourCard from "./tourCard";
const Section2 = ({ data }) => {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.top}>
          <div>
            <h1>
              FIND <span>POPULAR</span>{" "}
            </h1>
            <h1>DESTINATION</h1>
          </div>
          <div></div>
        </div>
        <div className={style.bottom}>
          {data.map((ele) => (
              <TourCard {...ele}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;

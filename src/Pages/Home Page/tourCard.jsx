import React from "react";
import style from "./style/section2.module.css"
import { useNavigate } from "react-router-dom";
const TourCard = ({ id, cost, url, name }) => {
  const navigate = useNavigate()
  return (
    <div className={`${style.card}` } >
      <img src={url} alt=""  />
      <h2>{name}</h2>
      <p></p>
      <div className={`d-flex justify-content-between ${style.s_card}`} >
        
        <div className={`d-flex align-items-center `}>
          <h1>
            {" "}
            <span>₹</span> {cost}/
          </h1>
          <p className="align-self-end">per person</p>
        </div>
        <div>
          <button onClick={()=>{navigate(`/tour/${id}`)}} >Book</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

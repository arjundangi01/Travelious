import React from "react";
import style from "./style/section2.module.css"
import { Link, useNavigate } from "react-router-dom";
const TourCard = ({ _id, cost, url, name }) => {
  const navigate = useNavigate()
  return (
    <div className={`${style.card}`} >
      <Link to={`/tour/tour/${_id}`} >
        <img src={url} alt=""  />
      </Link>
      
      <h2>{name}</h2>
      <p></p>
      <div className={`d-flex justify-content-between ${style.s_card}`} >
        
        <div className={`d-flex align-items-center `}>
          <h2>
            {" "}
            <span>₹</span> {cost}/
          </h2>
          <p className="align-self-end">per person</p>
        </div>
        <div>
          <button onClick={()=>{navigate(`/tour/tour/${_id}`)}} >Book</button>
        </div>
      </div>
    </div>
  );
};

export default TourCard;

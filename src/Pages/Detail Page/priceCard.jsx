import React from "react";
import style from "./style/priceCard.module.css"
const PriceCard = ({tourObj}) => {
  return (
    <div className={style.price_card}>
      <div className={style.price_first_div}>
        <p>Starting from</p>
        <h2> ₹ {tourObj.cost}</h2>
        <p>per person</p>
      </div>
      <div className={style.price_sec_div}>Hotel Include in this package</div>
      <div className={style.price_third_div}>
        <button>PROCEED TO BOOK ONLINE</button>
      </div>
    </div>
  );
};

export default PriceCard;

import React from "react";
import style from "./style/incandexc.module.css";
const Incandexc = () => {
  return (
    <div className={style.container}>
      <div className={style.inc_div}>
        <h5>Inclusions</h5>
        <ul>
          <li>
          All Tour and transfer Pvt basis.
          </li>
          <li>Daily Breakfast at hotel.</li>

          <li>UAE Visa fee</li>
          <li>All applicable taxes.</li>
          <li>Return economy Airfare</li>
        </ul>
      </div>
      <div className={style.exc_div}>
        <h5>Exclusions</h5>
        <ul>
          <li>Any International Airfare.</li>
          <li>Tips & gratuities for drivers & guides.</li>
          <li>Meals not mentioned in the Itinerary or Inclusions.</li>
          <li>
            Drinks (neither with meals, nor on vehicles or during tours, unless
            otherwise indicated)
          </li>
          <li>Anything not mentioned in Tour Inclusions.</li>
          <li>City tax is directly payable at the hotel.</li>
          <li>Room Are Subject to availability at the time of booking.</li>
          <li>GST 5% & TCS 5%</li>
        </ul>
      </div>
    </div>
  );
};

export default Incandexc;

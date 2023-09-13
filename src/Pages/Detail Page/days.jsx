import React from "react";
import style from "./style/days.module.css";
const Days = () => {
  return (
    <div className={style.container}>
      
      <div className={style.day_div}>
        <div>
          <h5 className={style.day}>Day 1</h5>
        </div>
        <hr />
        <div>
          <p>
            On arrival in Abu Dhabi International Airport , you'll be
            transferred to your hotel. Upon arrival check in to the hotel and
            relax. Day at leisure. Overnight stay at hotel.
          </p>
          <p>Day at leisure. Overnight stay at hotel.</p>
          <p>Day at leisure.</p>
        </div>
      </div>
      <div className={style.day_div}>
        <div>
          <h5 className={style.day}>Day 2</h5>
              </div>
              <hr />
        <div>
          <p>Morning breakfast at hotel.</p>
          <p>Spend time at Leisure or add an activity to your day</p>
          <p>Return to hotel and overnight hotel.</p>
        </div>
      </div>
      <div className={style.day_div}>
        <div>
          <h5 className={style.day}>Day 3</h5>
              </div>
              <hr />
        <div>
          <p>Morning breakfast at hotel.</p>
          <p>Spend time at Leisure or add an activity to your day</p>
          <p>Return to hotel and overnight hotel.</p>
        </div>
      </div>
      <div className={style.day_div}>
        <div>
          <h5 className={style.day}>Day 4</h5>
              </div>
              <hr />
        <div>
          <p>Morning breakfast at hotel.</p>
          <p>Spend time at Leisure or add an activity to your day</p>
          <p>Return to hotel and overnight hotel.</p>
        </div>
      </div>
    </div>
  );
};

export default Days;

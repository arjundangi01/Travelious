import React from "react";
import style from "./styles/history.module.css";
const History = () => {
  return (
    <div className={style.container}>
      <div className={style.heading_div}>
        <h3>Booking History</h3>
      </div>
          <div className={style.history_div} >
              <div className={style.empty_div} >
                  <h1>No Booking Yet !</h1>
              </div>
      </div>
    </div>
  );
};

export default History;

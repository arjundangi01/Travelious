import React, { useState } from "react";
import style from "./styles/history.module.css";
const History = ({ setPopup, ele,setSelected,index,userObj }) => {
  // console.log(ele)
  const [status, setStatus] = useState(ele.status);
  return (
    <div className={style.container}>
      
      <div className={style.history_div}>
    
        <div>
          <div className={style.row}>
            <div className={style.row_left_div}>
              <div>
                <h6 style={{ color: ele.status ? "green" : "red" }}>
                  {ele.status ? "Booked" : "Canceled"}
                </h6>
                <div
                  style={{ backgroundColor: ele.status ? "green" : "red" }}
                  className={style.dot}
                ></div>
              </div>
              <div>
                <h2>{ ele.name}</h2>
                <p>{ele.title}</p>
                {ele.status && <button onClick={() => {
                  setSelected({index:index,obj:userObj})
                  setPopup(true)
                }} >Cancel</button>}
              </div>
            </div>
            <div className={style.row_right_div} >
            { !ele.status && <div>
                <div style={{color:"green"}}>
                  <h4>Refund Amount</h4>
                  <h4>₹ {ele.refundAmount}</h4>
                </div>
                <div style={{color:"red"}}>
                  <p  >Cancel Date</p>
                  <p>{ele.cancelDate}</p>
                </div>
              </div>}
              <div>
                <div>
                  <h4>Price</h4>
                  <h4>₹ {ele.cost}</h4>
                </div>
                <div>
                  <p>Booking Date</p>
                  <p>{ele.bookingDate}</p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;

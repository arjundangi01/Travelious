import React from "react";
import styles from "./payment.module.css"
const Pricetotal = ({data}) => {
    let {
        roomStr,
        basePrice,
        disc,
        promo,
        extra,
        person
    } = data;
    let discP = Math.round((disc / 100) * basePrice)
    let pad = basePrice - discP
    let tax = Math.round(0.15 * pad)
    let payable = pad - tax
    basePrice = "₹"+basePrice
    localStorage.setItem("payable",payable)
    if(extra!=0){
        extra = 0;
        // "<div>Insurance opt-in</div> &#8377 "+(19*person)
        payable+=19*person
    }
    else extra = ""
    return <>
    <div>
      <div>
        Room Charges (
        <span className={styles.roomstr}>
          ${"{"}roomStr{"}"}
        </span>
        )
      </div>
      <div>
        ${"{"}basePrice{"}"}
      </div>
    </div>
    <div>
      <div>
        Total Discounts
        <span id={styles.disc}>
          ${"{"}disc{"}"}% off
        </span>
      </div>
      <div style={{ color: "green" }}>
        - ₹ ${"{"}discP{"}"}
      </div>
    </div>
    <div id={styles.applied}>
      ${"{"}promo{"}"} Applied
    </div>
    <hr />
    <div>
      Price after discounts{" "}
      <span>
        ₹ ${"{"}pad{"}"}
      </span>
    </div>
    <div>
      Taxes &amp; Fees{" "}
      <span>
        ₹ ${"{"}tax{"}"}
      </span>
    </div>
    <div>
      ${"{"}extra{"}"}
    </div>
    <hr />
    <div>
      <h4>Payable Now</h4>
      <h4>
        ₹ ${"{"}payable{"}"}
      </h4>
    </div>
    <sub style={{ color: "#1ca0e3" }}>Emi starts at ₹ 1000/month</sub>
  </>
  
}
export default Pricetotal;
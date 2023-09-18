import React, { useEffect } from "react";
import styles from "./payment.module.css"
import { useSelector } from "react-redux";
const Pricetotal = ({hotelData,totalGuest,totalRoom,promoCode,setPayable,payable,roomChoice,dateDifference}) => {
  // const data=useSelector((store)=>{return store});
  // const{cost}=data;

    let {
       cost
    } = hotelData;
  
    let discP = 0;
    let roomPrice=0;
if(totalRoom>1){
    roomPrice=(totalRoom-1)*800
}
if(roomChoice=="suite"){
  roomPrice=roomPrice+700;
}
if(dateDifference>=5){
  roomPrice=roomPrice+((dateDifference-5)*1200);
}
    if(promoCode=="First Booking"){discP=500}
    else if(promoCode=="Travelious-day"){discP=Math.floor( cost*0.05)}

    else if(promoCode=="WELCOMEMMT"){discP=1000}
    useEffect(() => {  
      const newPayable = (cost*totalGuest) - discP + Math.ceil((cost*totalGuest) * 0.05)+ roomPrice+ 19 * totalGuest;
      setPayable(newPayable);
    }, [cost, discP, totalGuest,roomPrice]);
    return <>
    <div>
      <div>
      Total Basic Cost (
        <span className={styles.roomstr}>
         {cost} x {totalGuest} traveller 
        </span>
        )
      </div>
      <div>
      ₹ {cost*totalGuest}
      </div>
    </div>
    <div>
      <div>
        Total Discounts
        <span id={styles.disc}>
        upto 25% off
        </span>
      </div>
      <div style={{ color: "green" }}>
        - ₹ {discP}
      </div>
    </div>
    <div id={styles.applied}>
      {promoCode} Applied
    </div>
    <hr />
    <div>
      Price after discounts{" "}
      <span>
        ₹ {(totalGuest*cost)-discP}
      </span>
    </div>
    <div>
      Taxes &amp; Fees (GST 5.0%){" "}
      <span>
        ₹ {Math.ceil((totalGuest*cost)*0.05)}
      </span>
    </div>
    <div>
      Extra charges
      <span>
        ₹ {(19*totalGuest)+roomPrice}
      </span>
    </div>
    <hr />
    <div>
      <h4>Payable Now</h4>
      <h4>
        ₹ {payable} 
      </h4>
    </div>
    <sub style={{ color: "#1ca0e3" }}>Emi starts at ₹ 1000/month</sub>
  </>
  
}
export default Pricetotal;
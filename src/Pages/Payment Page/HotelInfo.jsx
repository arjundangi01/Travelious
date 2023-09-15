import React from "react";
import styles from "./payment.module.css"
const HotelInfo=({hotelData})=>{
    // const {id,Country,name,url,cost,guestDetails,ratings} = hotelData; 
    // let stars = ratings
    // let code = ""
    // for(let x=0; x<stars; x++){
    //     code+='<ion-icon name="star"></ion-icon>'
    // }
    // for(let x=stars; x<5; x++){
    //     code+='<ion-icon name="star-outline"></ion-icon>'
    // }
    // let random = Math.round(Math.random()*100)+1;
    return (<>
       <div className={styles.himgDiv}>
          <img src="https://a0.muscache.com/im/pictures/7cc3c855-f90e-4d0f-9b13-3b5c2a3c4bad.jpg?im_w=720" alt="" />

        </div>
        <div className={styles.hinfoDiv}>
          <div className={styles.hstars}>
            ${"{"}code{"}"}
          </div>
          <div className={styles.htitle}>
            ${"{"}name{"}"}
          </div>
          <div className={styles.haddress}>
            <ion-icon name="location-sharp" />${"{"}Country{"}"}
          </div>
          <div className="hreview">
            <span className={styles.bggreen}>
              ${"{"}stars{"}"}/5
            </span>
            ${"{"}random{"}"} Verified Ratings
          </div>
          <div className={styles.hdeal}>
            <span>
              <ion-icon name="alarm-outline" />
              Daily Steal Deal
            </span>{" "}
            <div>
              Ends in <span id="time" />
            </div>
          </div>
        </div>
      </>
      )
}
export default HotelInfo;
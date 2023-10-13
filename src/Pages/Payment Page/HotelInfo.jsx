import React from "react";
import styles from "./payment.module.css"
import { FaCalendarTimes, FaClock, FaHeart, FaLandmark, FaMapMarked, FaMapMarkedAlt, FaPinterest, FaRegClock, FaRegClosedCaptioning, FaSearchLocation, FaShare, FaStar, FaStopwatch, FaTimes, FaUserClock, FaWatchmanMonitoring } from "react-icons/fa";
const HotelInfo=({hotelData})=>{
    const {id,Country,name,url,cost,guestDetails} = hotelData; 
  // console.log(ratings)
  let ratings = 4;
    let stars = [];
      let whiteStar=[]
    for(var i=1;i<=ratings;i++){
      stars.push(i)
    }
    for(var i=ratings;i<5;i++){
      whiteStar.push(i)
    }
 
  
  
   
    let random = Math.round(Math.random()*100)+1;
    return (<>
       <div className={styles.himgDiv}>
          <img src={url} alt="" />

        </div>
        <div className={styles.hinfoDiv}>
          <div className={styles.hstars}>
          {stars.map((e,ind)=>(
            <FaStar key={ind} style={{color:"ffdd00c0"}}/>
          ))}
          {whiteStar.map((e,ind)=>(
            <FaStar key={ind} style={{color:"grey"}}/>
          ))}
          </div>
          <div className={styles.htitle}>
            {name}
          </div>
          <div className={styles.haddress}>
            <FaMapMarkedAlt />{Country}
          </div>
          <div className="hreview">
            <span className={styles.bggreen}>
              {ratings}/5
            </span>
            {2} Verified Ratings
          </div>
          <div className={styles.hdeal}>
            <span>
              <ion-icon name="alarm-outline" />
             <FaStopwatch/>
              Daily Steal Deal
             
            </span>{} 
            <div>
              {/* Ends in */}
               <span id="time"  />
            </div>
          </div>
        </div>
      </>
      )
}
export default HotelInfo;
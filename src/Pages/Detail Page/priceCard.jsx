import React, { useEffect } from "react";
import style from "./style/priceCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction, newBookingAction } from "../../Redux/User Data/action";
import { useNavigate } from "react-router";
import { moveToPaymentAction } from "../../Redux/TotalAmount/action";
const PriceCard = ({ tourObj }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { UserData } = useSelector((store) => store.userReducer);
  console.log( "userData",UserData);
  const handleClick = () => {
    // var bookingDate = new Date().toLocaleDateString();
    
    // const newObj = {...UserData,bookingHistory:[...UserData.bookingHistory,{...tourObj,status:true,bookingDate}]};
    // console.log("first",newObj)
   
    // dispatch(newBookingAction(newObj))
    navigate(`/payment/${tourObj._id}`)
    dispatch(moveToPaymentAction(tourObj._id))
  };
  useEffect(() => {
    // dispatch(getUserAction("aby45kuf4ku"));
   
  }, []);
  return (
    <div className={style.price_card}>
      <div className={style.price_first_div}>
        <p>Starting from</p>
        <h2> ₹ {tourObj.cost}</h2>
        <p>per person</p>
      </div>
      <div className={style.price_sec_div}>Hotel Include in this package</div>
      <div className={style.price_third_div}>
        <button
          onClick={handleClick}
        >
          PROCEED TO BOOK ONLINE
        </button>
      </div>
    </div>
  );
};

export default PriceCard;

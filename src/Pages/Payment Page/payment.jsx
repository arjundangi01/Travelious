import React, { useEffect, useState } from "react";
import './payment.module.css'
import styles from "./payment.module.css"
import HotelInfo from "./HotelInfo";
import AddGuest from "./AddGuest";
import Pricetotal from "./Pricetotal";
import { FaHeart, FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import { singleTour } from "../../Redux/Tour Detail/action";
import { newBookingAction } from "../../Redux/User Data/action";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";
// import { Navbar } from "react-bootstrap";

const Payment = () => {
  const[totalGuest,setTotalGuest]=useState(1);
  const[totalRoom,setTotalRoom]=useState(1);
  const[promoCode,setPromoCode]=useState("");
  const[payable,setPayable]=useState(0);
  const [date, setDate] = useState('');
  const[nextDate,setNextDate]=useState('')
  const[roomChoice,setRoomChoice]=useState('');
  const [dateDifference, setDateDifference] = useState(0);
  const dispatch = useDispatch();

const guestMap=[];
const navigate=useNavigate();
for(var i=1;i<=totalGuest;i++){
  guestMap.push(i);
}
  
  let data = {
    roomStr: 2,
    basePrice: 2,
    disc: 2,
    promo: 5,
    extra: 3,
    night: 2,
    person: totalGuest
}

const { UserData } = useSelector((store) => store.userReducer);
console.log("userData in payment",UserData)
const ratings=4;
  // const hotelData=useSelector((store)=>{return store});
  const { tourObj:hotelData } = useSelector((store) => store.tourDetailReducer);
  console.log("tourObj",hotelData);
  const { id } = useParams();
  
  useEffect(() => {
    dispatch(singleTour(id));
  }, []);

// const hotelData={
//   id: 5,
//   Country: "Indonesia",
//   name: "Tampaksiring, Bali, Indonesia",
//   url: "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=720",
//   description: "Located just a 20-minute scooter ride from the vibrant centre of Ubud.",
//   cost: "43201",
//   title: "Entire cabin hosted by Eco Six Bali",
//   heading: "Dome - Bamboo Villa in Eco Six Bali",
//   urls: "https://a0.muscache.com/im/pictures/4a5c629b-9c92-450e-8d8f-995875798838.jpg?im_w=960",
//   "url1": "https://a0.muscache.com/im/pictures/08a9afde-e2f2-48aa-b8b0-a7e747318943.jpg?im_w=480",
//   "url2": "https://a0.muscache.com/im/pictures/b51f509a-9c94-4d1c-a31c-1a465e1670ac.jpg?im_w=480",
//   "url4": "https://a0.muscache.com/im/pictures/0295e1cd-09fe-448a-b837-7bf5ade3809c.jpg?im_w=480",
//   "url3": "https://a0.muscache.com/im/pictures/6d3f81b5-affa-4c13-8681-4081d2568be6.jpg?im_w=480",
//   guestDetail: "4 guests2-bedrooms2-beds2-bathrooms",
//   description1: "The Dome is a one bedroom bamboo villa built on two floors. Its ground floor houses an open air living room fitted with a dining area, a seating area and balinese style hammock.The living room has direct access to a spacious balinese style garden and the beautiful Santorini style infinity pool.Amenities in the living room include a projector with Netflix, Nespresso coffee machine and refrigerated minibar.The master bedroom on the upper floor is fitted with a king size bed, a walk-in wardrobe, air conditioning, an in-room bathtub from where our guests can enjoy the beautiful rice fields views and a balcony overlooking the famous volcano Mount Agung. The bedroom houses a modernly equipped bathroom.",

// };

useEffect(() => {
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  setDate(getCurrentDate());
}, []);

useEffect(() => {
  const calculateNextDate = () => {
    const today = new Date();
    today.setDate(today.getDate() + 5); 
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); 
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  setNextDate(calculateNextDate());
}, []);

function dateDiffInDays(date1, date2) {
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
}

useEffect(() => {
  const date1 = new Date(date);
  const date2 = new Date(nextDate);
  const daysDifference = dateDiffInDays(date1, date2);
  setDateDifference(daysDifference);
}, [date, nextDate]);
console.log(dateDifference||5)


const loadScript=(src)=>{
  return new Promise((resolve)=>{
    const script=document.createElement("script");
    script.src=src
    script.onload=()=>{
      resolve(true)
    }
    script.onerror=()=>{
      resolve(false)
    }
    document.body.appendChild(script)
    console.log("hey")
  
  })
}
const displayRazorpay=async (amount)=>{
  const res =await loadScript(`https://checkout.razorpay.com/v1/checkout.js`);
  if(!res){
    alert("You are offline...failed to load!!")

    return
  }
  const options={
    key:"rzp_test_bYgcKIf2wUpOw9",
    currency:"INR",
    amount:amount*100,
    name:"Enjoy with Travelious",
    handler:function(response){
      // alert(response.razorpay_payment_id)
      var bookingDate = new Date().toLocaleDateString();
    
      const newObj = {...UserData,bookingHistory:[...UserData.bookingHistory,{...hotelData,status:true,bookingDate,cost:payable}]};
      console.log("user id and new obj",newObj,UserData.id)
     
      dispatch(newBookingAction(newObj,UserData.id))
      navigate("/payment/confirm")

      
    }
  };
  const paymentObject=new window.Razorpay(options)
  paymentObject.open()
}

const validateInputs = () => {

  const emailInput = document.getElementById("emailForm");
  // console.log(firstNameInput)
  const mobilForm=document.getElementById("mobilForm");
  if (!emailInput.value.trim()) {
    return false; 
  }

  if (!mobilForm.value.trim()) {
    return false; 
  }


  return true; 
};

const handleFormSubmit = (e) => {
  e.preventDefault(); 


  if (validateInputs()) {

    displayRazorpay(payable);
  } else {
  
    alert("Please fill in all required fields.");
  }
};
// console.log(date-nex)
  return (
    <div className="App">
      <Navbar/>
     <>
    
  <div id={styles.back_ground} />
  <form id={styles.main_b} onSubmit={handleFormSubmit}>
    <div className={styles.left_div}>
      <div>
        <div className={`${styles.h2div}`}>
        {/* //${styles.active} */}
          <img src="https://img.icons8.com/?size=512&id=rAYGhi9tou6j&format=png" />
          <div>
            <h2>Review package</h2> 
          </div>
          <img
            className={`${styles.active}`}
            // src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={styles.content} >
        {/* "content collapse show" */}
          <div className={styles.hotel_info}>
            <div className={styles.infoDiv}>
              <HotelInfo hotelData={hotelData}/>
            </div>
            <div className={styles.check_in}>
              <div>
                <p>Check In</p>
                <input
  type="date"
  className={styles.date_picker}
  onChange={(e) => setDate(e.target.value)}
  value={date}
  id="checkindate"
   
/>

                <p>12:00 PM</p>
              </div>
              <div>
                <p>Rooms Choice</p>
                <select id="roomtype" onChange={(e)=>{setRoomChoice(e.target.value)}} >
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
              <div id={styles.guestDiv}>
                <div>
                  <p>Guests</p>
                  <select id={styles.numguest}  onChange={(e)=>{e.preventDefault();setTotalGuest(e.target.value)}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    {/* <option><input type="text"/></option> */}
                  </select>
                </div>
                <div>
                  <p>Rooms</p>
                  <select id={styles.numroom}onChange={(e)=>{e.preventDefault(); setTotalRoom(e.target.value)}}>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Check Out</p>
                <input
  type="date"
  value={nextDate}
  onChange={(e) => setNextDate(e.target.value)}
  className={styles.date_picker}
  id="checkoutdate"
/>
                <p>11:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.h2div}`}>
        {/* ${styles.active} */}
          <img src="https://img.icons8.com/?size=512&id=uycYbKOpjcvE&format=png" />
          <div>
            <h2>Guest Details</h2>
          </div>
          <img
            className={`${styles.active}`}
            // src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={`${styles.guest}`}>
        {/* content guest collapse show */}
          <div className={styles.persons}>
        {guestMap.map((e,ind)=>(<AddGuest key={ind}/>))}
          </div>
          {/* <button id="add-guest" className="btn btn-info btn-sm">
            Add Guest
          </button> */}
          <div className={styles.email}>
            <div>
              Email Address
              <span style={{ fontSize: 13 }}>
                (Your booking voucher will be sent to this email address)
              </span>
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              id="emailForm"
              required=""
            />
          </div>
          <div className={styles.mobile}>
            Mobile Number
            <div>
              <div>+91</div>
              <input type="number"  id="mobilForm"    placeholder="Enter Phone Number"  required="" />
            </div>
          </div>
          <hr style={{ width: "100%", margin: 0 }} />
          <div>
            <input type="checkbox" name="" id={styles.check_gst} />
            <label htmlFor="">Enter GST Details (optional)</label>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.h2div}`}>
          <img
            style={{ width: "2em", height: "1.9em" }}
            src="https://img.icons8.com/?size=512&id=ZPLpfsKE1OLu&format=png"
          />
          <div>
            <h2>Your Pincode and State</h2>
            <p>
              (Required for GST purpose on your tax invoice. You can edit this
              anytime later in your profile section. )
            </p>
          </div>
          <img
            className={`${styles.active}`}
            // src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={`${styles.gst}`}>
        {/* content collapse show gst */}
        
          <div>
            <input
              type="text"
              placeholder="Enter billing address"
              required=""
            />
            <input type="text" placeholder="Enter Pincode" required="" />
            <select id="state-select" required="">
              <option value="">--Select State--</option>
              <option value="AN">Andaman and Nicobar Islands</option>
    <option value="AP">Andhra Pradesh</option>
    <option value="AR">Arunachal Pradesh</option>
    <option value="AS">Assam</option>
    <option value="BR">Bihar</option>
    <option value="CH">Chandigarh</option>
    <option value="DL">Delhi</option>
    <option value="KL">Kerala</option>
    <option value="LA">Ladakh</option>
    <option value="LD">Lakshadweep</option>
    <option value="MP">Madhya Pradesh</option>
    <option value="MH">Maharashtra</option>
    <option value="MN">Manipur</option>
   
   

            </select>
          </div>
          <div>
            <input type="checkbox" name="" id="check-gst" />
            <label htmlFor="">
              Confirm and save billing details to your profile
            </label>
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.h2div}`}>
          <img src="https://gos3.ibcdn.com/insurance-1637576980.png" />
          <div>
            <h2>Trip Secure</h2>
            <p>
              Trip Secure document will sent to the registered Email ID within
              48 hours of booking.
            </p>
          </div>
          <img
            className={`${styles.active}`}
            // src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={`${styles.insurance}`}>
        {/* content collapse show insurance" */}
          <div>
            <div>
              <h4>Worry free hotel stay!</h4>
              <ul>
                <li>
                  <span className={styles.dot} />
                  24*7 emergency medical assistance
                </li>
                <li>
                  <span className={styles.dot} />
                  Upto ₹ 10K for hotel booking cancellation charges if cancelled
                  due to illness
                </li>
                <li>
                  <span className={styles.dot} />
                  Upto ₹ 20K for bounced booking
                </li>
                <li>
                  <span className={styles.dot} />
                  Upto ₹ 20K for loss of tablets and laptops
                </li>
                <li>
                  <span className={styles.dot} />
                  Upto ₹ 20K for loss of baggage
                </li>
                <li>
                  <span className={styles.dot} />
                  Upto ₹ 10K for cost of return travel in case of trip
                  interruption
                </li>
                <li>
                  <span className={styles.dot} />
                  Upto ₹ 10K for hotel extension in case of hospitalization
                </li>
              </ul>
            </div>
            <div>
              <div>
                <img
                  src="https://tripmoneycmsimgak.mmtcdn.com/img/Group_2947_b848417d45.png"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <p>
                    <b>
                      <span>₹</span>19
                    </b>{" "}
                    <span>per person</span>
                  </p>
                  <p>
                    <span style={{ color: "#DC5F00" }}>Non Refundable </span>|
                    Includes GST
                  </p>
                </div>
                <div>
                  {/* <button id="addins">+ Add</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        className="btn btn-info btn-lg"
        id="goToPay"
        type="submit"
        defaultValue="Proceed to payment"
       
        style={{ marginBottom: 10,  lineHeight: "2em", textAlign: "center", }}
      />
      <sub style={{ marginBottom: 10, lineHeight: "1em", textAlign: "center" }}>
        By proceeding, I agree to Travelious Privacy Policy, User Agreement &amp;
        Terms of Service
      </sub>
    </div>
    <div className={styles.right_div}>
      <div>
        <div  className={`${styles.h2div}`}>
        {/* ,${styles.active} */}
          <img src="https://img.icons8.com/?size=512&id=13008&format=png" />
          <div>
            <h2>Price Summary</h2>
          </div>
          <img
            className={`${styles.active}`}
            // src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={styles.content}>
          <div id={styles.priceSumDiv}>
       <Pricetotal hotelData={hotelData} totalGuest={totalGuest} totalRoom={totalRoom} promoCode={promoCode} setPayable={setPayable} payable={payable} roomChoice={roomChoice} dateDifference={dateDifference} />
          </div>
        </div>
      </div>
      <div>
        <div className={`${styles.h2div}`}>
        {/* ,${styles.active} */}
          <img src="https://img.icons8.com/?size=512&id=C46NIcRCjoTm&format=png" />
          <div>
            <h2>Travelious Offers</h2>
          </div>
          <img
            className={`${styles.active}`}
            // src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.offerDiv} >
            <div className={`${styles.active}`} >
              <input
                name="offer-type"
                className="form-check-input"
                id="radio-offer"
                type="radio"
                defaultValue="First Booking"
                defaultChecked=""
                disc={35}
                onClick={(e)=>{setPromoCode(e.target.value); }}
              />
              <div>
                <div>
                First Booking{" "}
                  <div>
                    - ₹ <span id="discount1">500</span>
                  </div>
                </div>
                <p>
                  Apply to avail this EXCLUSIVE offer on your first hotel
                  booking!{" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    T&amp;C Apply
                  </a>
                </p>
              </div>
            </div>
            <div>
              <input
                name="offer-type"
                className="form-check-input"
                id="radio-offer"
                type="radio"
                defaultValue="Travelious-day"
                disc={30}
                onClick={(e)=>{setPromoCode(e.target.value)}}
              />
              <div>
                <div>
                Travelious-day
                  <div>
                    - ₹ <span id="discount2">{Math.floor( hotelData.cost*0.05)}</span>
                  </div>
                </div>
                <p>
                Online Only Offer - Use This Coupon and Get Upto 25% Off!!{" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    T&amp;C Apply
                  </a>
                </p>
              </div>
            </div>
            <div>
              <input
                name="offer-type"
                className="form-check-input"
                id="radio-offer"
                type="radio"
                defaultValue="WELCOMEMMT"
                disc={25}
                onClick={(e)=>{setPromoCode(e.target.value)}}
              />
              <div>
                <div>
                WELCOMEMMT
                  <div>
                    - ₹ <span id="discount3">1000</span>
                  </div>
                </div>
                <p>
               
                Welcome to Travelious! Here is a special offer for you to book with a credit card.{" "}
                  <a href="#" style={{ textDecoration: "none" }}>
                    T&amp;C Apply
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  {/* <Footer/> */}
  {/* 
</html>
*/}
</>

    </div>
  );}

export default Payment

//h2div classname check it 192line
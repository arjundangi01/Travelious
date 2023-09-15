import React from "react";
import './payment.module.css'
import styles from "./payment.module.css"
import HotelInfo from "./HotelInfo";
import AddGuest from "./AddGuest";
import Pricetotal from "./Pricetotal";
const Payment = () => {
  
  let data = {
    roomStr: 2,
    basePrice: 2,
    disc: 2,
    promo: 5,
    extra: 3,
    night: 2,
    person: 3
}
  return (
    <div className="App">
     <>
    
  <div id={styles.back_ground} />
  <form id={styles.main_b}>
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
            src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={styles.content} >
        {/* "content collapse show" */}
          <div className={styles.hotel_info}>
            <div className={styles.infoDiv}>
              <HotelInfo/>
            </div>
            <div className={styles.check_in}>
              <div>
                <p>Check In</p>
                <input type="date" className={styles.date_picker} id="checkindate" />
                <p>12:00 PM</p>
              </div>
              <div>
                <p>Rooms Choice</p>
                <select id="roomtype">
                  <option value="deluxe">Deluxe</option>
                  <option value="suite">Suite</option>
                </select>
              </div>
              <div id={styles.guestDiv}>
                <div>
                  <p>Guests</p>
                  <select id={styles.numguest}>
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
                  <select id="numroom">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                  </select>
                </div>
              </div>
              <div>
                <p>Check Out</p>
                <input type="date" className={styles.date_picker} id="checkoutdate" />
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
            src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={`${styles.guest}`}>
        {/* content guest collapse show */}
          <div className={styles.persons}>
          <AddGuest/>

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
              type="text"
              placeholder="Enter Email Address"
              id="emailForm"
              required=""
            />
          </div>
          <div className={styles.mobile}>
            Mobile Number
            <div>
              <div>+91</div>
              <input type="text" placeholder="Enter Phone Number" required="" />
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
            src="https://img.icons8.com/?size=27&id=88000&format=png"
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
            src="https://img.icons8.com/?size=27&id=88000&format=png"
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
            src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={styles.content}>
          <div id={styles.priceSumDiv}>
       <Pricetotal data={data}/>
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
            src="https://img.icons8.com/?size=27&id=88000&format=png"
          />
        </div>
        <div className={styles.content}>
          <div className={styles.offerDiv}>
            <div className={`${styles.active}`}>
              <input
                name="offer-type"
                className="form-check-input"
                id="radio-offer"
                type="radio"
                defaultValue="First Hotel"
                defaultChecked=""
                disc={35}
              />
              <div>
                <div>
                  First Hotel{" "}
                  <div>
                    - ₹ <span id="discount1">817</span>
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
                defaultValue="Alcaza-day"
                disc={30}
              />
              <div>
                <div>
                Travelious-day
                  <div>
                    - ₹ <span id="discount2">817</span>
                  </div>
                </div>
                <p>
                  Also enjoy FREE Swiggy coupon of FLAT Rs. 125 OFF* upon Check
                  In{" "}
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
                defaultValue="Tha-Alcaza"
                disc={25}
              />
              <div>
                <div>
                 The-Travelious
                  <div>
                    - ₹ <span id="discount3">817</span>
                  </div>
                </div>
                <p>
                  Use Tha-Travelious to get instant discount on this hotel booking
                  celebrating Thalaiva's latest hit{" "}
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
  <footer></footer>
  {/* 
</html>
*/}
</>

    </div>
  );}

export default Payment

//h2div classname check it 192line
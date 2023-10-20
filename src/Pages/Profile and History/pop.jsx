import React from 'react'
import {ImCancelCircle} from "react-icons/im"
import style from "./styles/popup.module.css"
import { useDispatch } from 'react-redux'
import { updateBookingStatusAction } from '../../Redux/User Data/action'
const PopUp = ({ UserData, setPopup, selected, setUpdate }) => {
    console.log("selected",selected)
    const dispatch = useDispatch();
    const refundAmount = parseInt(Math.round(selected.obj.cost*80/100)) 
  return (
      <div className={style.container} >
          <div className={style.heading} >
              <h2>Cancelation</h2>
              <ImCancelCircle onClick={()=>setPopup(false)} />
          </div>
          <div>
              <h3>Cancelation Policies</h3>
              <ul>
                  <li>Amount will refunded in 24hrs</li>
                  <li>20% deduction apply</li>
              </ul>
          </div>
          <div className={style.refund_div}>
              <h4>Refund Amount</h4>
              <p>₹ {refundAmount}</p>
          </div>
          <div className={style.confirm_div}>
              <h5>Still want to continue</h5>
              <div>
              <button onClick={() => { setUpdate(prev => !prev); dispatch(updateBookingStatusAction(selected,refundAmount)); setPopup(false); }} className={style.yes_btn}>Yes</button>
              <button onClick={()=>setPopup(false)} className={style.no_btn}>No</button>
                  
              </div>
          </div>
    </div>
  )
}

export default PopUp
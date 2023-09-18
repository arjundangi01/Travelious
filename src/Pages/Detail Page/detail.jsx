import React from 'react'
import { BsBootstrapReboot } from 'react-icons/bs';
import { PiMedal } from 'react-icons/pi';
import { AiOutlineCalendar, AiOutlineGift } from 'react-icons/ai';
import style from "./style/detail.module.css"
const Detail = ({data}) => {
  return (
      <div className={style.container} >
          
          <div className={style.bottom} >
              <h5> <span> <BsBootstrapReboot/> </span> Flexible Cancelation</h5>
              <h5> <span><PiMedal/></span> Best price guarantee</h5>
              <h5> <span> <AiOutlineCalendar/> </span> Buy now, choose dates later</h5>
              <h5> <span><AiOutlineGift/></span> Gifting available</h5>
          </div> 
          <div>
              <h2>Description</h2>
              <p>{data.description1 }</p>
          </div>
    </div>
  )
}

export default Detail
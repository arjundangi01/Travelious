import React, { useEffect } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { addTour } from '../../Redux/Tour Data/action';
import styles from "./tour.module.css"
import {SlLocationPin} from "react-icons/sl"
import {FaHotel} from "react-icons/fa"
import {PiBinocularsFill} from "react-icons/pi"
import {AiFillCar} from "react-icons/ai"
import {GiMeal} from "react-icons/gi"
import {AiTwotoneStar} from "react-icons/ai"

const Tour = () => {

  const dispatch = useDispatch();
  
  const tourData = useSelector((store) => store.tourReducer.tours)
  console.log(tourData);

  useEffect(() => {
    dispatch(addTour())
  },[dispatch])



  return (
    <div>
    {/* <h1>Tour Page</h1> */}
    <div className={styles.mainCard}>
      <div className={styles.topCover}>
        <img src="https://images.unsplash.com/photo-1598192743377-72736e228eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80"  alt="landscape img" />
        <p>Find Popular Destination</p>
        <div>
          <input className={styles.input} type="text" placeholder='search destination'/>
          <button className={styles.searchBtn}>SEARCH</button>
        </div>
        <SlLocationPin type='icon' className={styles.location}/>
        
        {/* tour cards */}
        <div className={styles.tourCards}>

          <div className={styles.singleCard}>
            {
              tourData?.map((ele) => (
                <div>
                    <img src={ele.url} alt="" />
                    
                    <div className={styles.nameDiv}>
                        <h6>{ele.name}</h6>
                        <p>{ele.Country}</p>
                    </div>

                    <div className={styles.hotelIcons}>
                      <FaHotel type='icon'/>
                      <PiBinocularsFill type='icon'/>
                      <AiFillCar type='icon'/>
                      <GiMeal type='icon'/>
                    </div>
                    <div className={styles.nameDiv}>
                      <h6 >Hotel Included </h6>
                      <span>Rate: 4.5<AiTwotoneStar className={styles.rating}/></span>
                    </div>
                    

                </div>
              ))

            }

          </div>

        </div>
        
        
        
      </div>

    </div>

    </div>
  )
}

export default Tour
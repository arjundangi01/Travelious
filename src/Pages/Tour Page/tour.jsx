import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { addTour } from '../../Redux/Tour Data/action';
import styles from "./tour.module.css"
import {SlLocationPin} from "react-icons/sl"
import {FaHotel} from "react-icons/fa"
import {PiBinocularsFill} from "react-icons/pi"
import {AiFillCar} from "react-icons/ai"
import {GiMeal} from "react-icons/gi"
import {AiTwotoneStar} from "react-icons/ai"
import {HiArrowNarrowRight } from "react-icons/hi"
import {HiArrowNarrowLeft} from "react-icons/hi"
const Tour = () => {
  const[render,setRender] = useState(1)

  const dispatch = useDispatch();
  
  const tourData = useSelector((store) => store.tourReducer.tours)
  // console.log(tourData);

  const loading = useSelector((store) => store.tourReducer.isLoading)
  console.log(loading);

  useEffect(() => {
    dispatch(addTour(render))
  },[dispatch])



  function handleNext() {
    setRender(prev => prev + 1)
    dispatch(addTour(render + 1)) // Pass the updated render value
  }
  function handlePrev(){
    setRender(prev => prev - 1)
    dispatch(addTour(render - 1))
  }



  return (
    <div>
    {/* <h1>Tour Page</h1> */}
    <div className={styles.mainCard}>

      {/* top cover */}

      <div className={styles.topCover}>
          <img src="https://images.unsplash.com/photo-1598192743377-72736e228eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80"  alt="landscape img" />
          <p>Find Popular Destination</p>
          <div>
            <input className={styles.input} type="text" placeholder='search destination'/>
            <button className={styles.searchBtn}>SEARCH</button>
          </div>
          <SlLocationPin type='icon' className={styles.location}/>
         
      </div>

       {/* tour cards */}
       
      <div className={styles.tourCards}>


        {/* is Loading */}
        <div className={styles.isLoading}>
            {
              loading?<h1>Loading...</h1>:""
            }
        </div>


        {/* title card */}

        <div className={styles.destinationTitle}>

          <h5 className={styles.title}>A Journey to Remember!</h5>
          <p>Trevelious is a captivating travel website that serves as a virtual passport to the world's most enchanting destinations. With each entry, readers embark on a journey filled with vivid storytelling and immersive experiences. The blog's author, a seasoned globetrotter, shares their personal encounters, offering unique insights, hidden gems, and cultural revelations from various corners of the globe. Join us on this journey of discovery and exploration through "Destination Diaries," where each post is an invitation to unlock the beauty and mystery of the world, one destination at a time.!</p>

        </div>

       
        {/* single card */}

          <div className={styles.singleCard}>
            {
              tourData?.map((ele) => (
                <div key={ele.id}>
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
                    <hr />
                    <p>starting from</p>

                    {/* price div */}
                    <div className={styles.priceDiv}>

                      <p>₹ {ele.cost}</p>
                      <button>Customize & Book <HiArrowNarrowRight className={styles.arrowBtn}/> 
                      </button>

                    </div>
                    <p className={styles.perPerson}>per person on twin sharing</p>
                    
                </div>
              ))

            }

          </div>

          <div  className={styles.nextBtn}>
            <button onClick={handlePrev}><HiArrowNarrowLeft className={styles.arrowBtn}/> Pre</button>
            <span>{render}</span>
             <button onClick={handleNext}>Next <HiArrowNarrowRight className={styles.arrowBtn}/></button>
          </div>

          

        </div>

    </div>

    </div>
  )
}

export default Tour
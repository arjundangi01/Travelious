import React, { useState } from 'react';
import {SlLocationPin} from "react-icons/sl"
import styles from "../tour.module.css"
import { useDispatch } from 'react-redux';
import { addTour } from '../../../Redux/Tour Data/action';

export const SearchBar =({setSortByCountry,setRender,setSortBy}) =>{

  const [search,setSearch] = useState("")
  // console.log(search);
  const dispatch = useDispatch();

  function handleSearchTour(){
    console.log(search);
    const render = 1; 
    const sortBy = "";
    setRender(1)
    setSortBy("")
    // dispatch(addTour(render, sortBy, search));
    setSortByCountry(search);
}


    return <>
        <p>Find Popular Destination</p>
          <h6>
          Dont't wait untill tomorrow, discover your adventure now and feel the sensation of closeness to nature around you!
          </h6>
          <div>
            <input className={styles.input} type="text" placeholder='search destination'onChange={(e)=> setSearch(e.target.value)}/>

            <input type="date" className={styles.destinationDate} />
            <button  onClick={handleSearchTour} className={styles.searchBtn}>SEARCH</button>
          </div>
          <SlLocationPin type='icon' className={styles.location}/>
    </>

}
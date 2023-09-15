import React, { useState } from 'react';
import {SlLocationPin} from "react-icons/sl"
import styles from "../tour.module.css"
import { useDispatch } from 'react-redux';
import { addTour } from '../../../Redux/Tour Data/action';

export const SearchBar =() =>{
  const [search,setSearch] = useState("")
  // console.log(search);
  const dispatch = useDispatch();

  function handleSearchTour(){
      console.log(search);
      const render = 1; 
     const sortBy = "";
      dispatch(addTour(render, sortBy, search));
  }

    return <>
        <p>Find Popular Destination</p>
          <div>
            <input className={styles.input} type="text" 
            placeholder='search destination' 
            onChange={(e)=> setSearch(e.target.value)}/>

            <button onClick={handleSearchTour} className={styles.searchBtn}>SEARCH</button>
          </div>
        <SlLocationPin type='icon' className={styles.location}/>
    </>

}
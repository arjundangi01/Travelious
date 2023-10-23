import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTour } from "../../Redux/Tour Data/action";
import styles from "./tour.module.css";
import { SlLocationPin } from "react-icons/sl";
import { FaHotel } from "react-icons/fa";
import { PiBinocularsFill } from "react-icons/pi";
import { AiFillCar } from "react-icons/ai";
import { GiMeal } from "react-icons/gi";
import { AiTwotoneStar } from "react-icons/ai";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import { SearchBar } from "./Components/SearchBar";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/navbar";
import Footer from "../../Components/footer";

const Tour = () => {
  const [render, setRender] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [sortbycountry, setSortByCountry] = useState("");
  // const[showFilter,setShowFilter] = useState(true)
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const tourData = useSelector((store) => store.tourReducer.tours);
  const totalPage = useSelector((store) => store.tourReducer.totalPage);
  // console.log(tourData);

  const loading = useSelector((store) => store.tourReducer.isLoading);
  // console.log(loading);

  useEffect(() => {
    dispatch(addTour(render, sortBy, sortbycountry));
    window.scrollTo(0, 0);
  }, [render, sortBy, sortbycountry]);

  function handleNext(e) {
    e.preventDefault();
    setRender((prev) => prev + 1);
    // dispatch(addTour(render + 1,sortBy,sortbycountry))
  }
  function handlePrev(e) {
    e.preventDefault();
    setRender((prev) => prev - 1);
    // dispatch(addTour(render - 1,sortBy,sortbycountry))
  }

  function handleSortChange(e) {
    e.preventDefault();
    const selectedSort = e.target.value;
    setSortBy(selectedSort);
    setRender(1);
  }

  function handleSortCountry(e) {
    e.preventDefault();
    const selectedCountry = e.target.value;
    setSortByCountry(selectedCountry);
    setRender(1);
    // console.log(selectedCountry);

    // dispatch(addTour(render, sortBy, selectedCountry));
  }

  // hello world

  //  function handleSearchTour(search){
  //       console.log(search);
  //       const render = 1;
  //       const sortBy = "";
  //       dispatch(addTour(render, sortBy, search));
  //   }

  function handleDetails(tourId) {
    navigate(`tour/${tourId}`);
  }

  return (
    <>
      <Navbar />

      <div>
        {/* <h1>Tour Page</h1> */}
        <div className={styles.mainCard}>
          {/* top cover */}

          <div className={styles.topCover}>
            <img
              src="https://images.unsplash.com/photo-1598192743377-72736e228eb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80"
              alt="landscape img"
            />

            {/* <p>Find Popular Destination</p>
          <h6>
          Dont't wait untill tomorrow, discover your adventure now and feel the sensation of closeness to nature around you!
          </h6>
          <div>
            <input className={styles.input} type="text" placeholder='search destination'/>
            <input type="date" className={styles.destinationDate} />
            <button className={styles.searchBtn}>SEARCH</button>
          </div>
          <SlLocationPin type='icon' className={styles.location}/> */}

            <SearchBar setSortByCountry={setSortByCountry} setSortBy={setSortBy} setRender={setRender} />
          </div>

          {/* tour cards */}

          <div className={styles.tourCards}>
            {/* filter part */}
            <div className={styles.filterPart}>
              <div>
                <div className={styles.fromCountry}>
                  <h6>From Country</h6>
                  <select onChange={handleSortCountry} value={sortbycountry}>
                    <option value="">Select</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Thiland">Thiland</option>
                    <option value="Bali">Bali</option>
                  </select>
                </div>
                {/* // */}
                <div className={styles.sortBy}>
                  <h6>Sort By</h6>
                  <select onChange={handleSortChange} value={sortBy}>
                    <option value="">Select</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                  </select>
                </div>
                {/* // */}
                <div className={styles.moreFilter}>
                  <FaFilter />
                  <h6>More Filters</h6>
                </div>
              </div>
            </div>

            {/* is Loading */}
            <div className={styles.isLoading}>
              {loading ? <h1>Loading...</h1> : ""}
            </div>

            {/* title card */}

            <div className={styles.destinationTitle}>
              <h5 className={styles.title}>A Journey to Remember!</h5>
              <p>
                Trevelious is a captivating travel website that serves as a
                virtual passport to the world's most enchanting destinations.
                With each entry, readers embark on a journey filled with vivid
                storytelling and immersive experiences. The blog's author, a
                seasoned globetrotter, shares their personal encounters,
                offering unique insights, hidden gems, and cultural revelations
                from various corners of the globe. Join us on this journey of
                discovery and exploration through "Destination Diaries," where
                each post is an invitation to unlock the beauty and mystery of
                the world, one destination at a time.!
              </p>
            </div>

            {/* single card */}

            <div className={styles.singleCard}>
              {tourData?.map((ele) => (
                <div key={ele.id}>
                  <img
                    onClick={() => {
                      handleDetails(ele._id);
                    }}
                    src={ele.url}
                    alt=""
                  />

                  <div className={styles.nameDiv}>
                    <h6>{ele.name}</h6>
                    <p>{ele.Country}</p>
                  </div>

                  <div className={styles.hotelIcons}>
                    <FaHotel type="icon" />
                    <PiBinocularsFill type="icon" />
                    <AiFillCar type="icon" />
                    <GiMeal type="icon" />
                  </div>
                  <div className={styles.nameDiv}>
                    <h6>Hotel Included </h6>
                    <span>
                      Rate: 4.5
                      <AiTwotoneStar className={styles.rating} />
                    </span>
                  </div>
                  <hr />
                  <p>starting from</p>

                  {/* price div */}
                  <div className={styles.priceDiv}>
                    <p>₹ {ele.cost}</p>

                    <button
                      onClick={() => {
                        handleDetails(ele._id);
                      }}
                    >
                      Customize & Book{" "}
                      <HiArrowNarrowRight className={styles.arrowBtn} />
                    </button>
                  </div>
                  <p className={styles.perPerson}>per person on twin sharing</p>
                </div>
              ))}
            </div>

            <div className={styles.nextBtn}>
              {
                render==1?(''):( <button disabled={render == 1} onClick={handlePrev}>
                <HiArrowNarrowLeft className={styles.arrowBtn} /> Prev
              </button>)
              }
             
              <span>{render}</span>
              {render == totalPage ? (
                ""
              ) : (
                <button disabled={render == totalPage} onClick={handleNext}>
                  Next <HiArrowNarrowRight className={styles.arrowBtn} />
                </button>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Tour;

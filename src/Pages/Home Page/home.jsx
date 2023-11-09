import React, { useEffect } from "react";
import style from "./home.module.css";
import Navbar from "../../Components/navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/footer";
import { getUserDetailAction } from "../../Redux/User Data/action";
import { tourDetailReducer } from "../../Redux/Tour Detail/tourDetailReducer";
import { addTour } from "../../Redux/Tour Data/action";
const Home = () => {
  const { tours } = useSelector((store) => store.tourReducer);
  console.log(tours);
  const dispatch = useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0); 
    dispatch({ type: "isProfileLoadingTrue" });

    dispatch(addTour(1))

  }, []);
  return (
    <>
      <Navbar />
      <Section1 />
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <div className={style.parent}>
          <Section2 data={tours} />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Home;

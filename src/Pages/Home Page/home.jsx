import React, { useEffect } from "react";
import style from "./home.module.css";
import Navbar from "../../Components/navbar";
import Section1 from "./section1";
import Section2 from "./section2";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";
import { useSelector } from "react-redux";
import Footer from "../../Components/footer";
const Home = () => {
  const { homePage } = useSelector((store) => store.tourDetailReducer);
  console.log(homePage);
  return (
    <>
      <Navbar />
      <Section1 />
      <div style={{ backgroundColor: "#f9f9f9" }}>
        <div className={style.parent}>
          <Section2 data={homePage} />
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

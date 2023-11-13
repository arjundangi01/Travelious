import React, { useEffect, useState } from "react";
import style from "./tourDetail.module.css";
import Navbar from "../../Components/navbar";
import { useDispatch, useSelector } from "react-redux";
import { singleTour } from "../../Redux/Tour Detail/action";
import Banner from "./banner";
import Days from "./days";
import Detail from "./detail";
import Intro from "./intro";
import Policies from "./policies";
import Incandexc from "./incandexc";
import PriceCard from "./priceCard";
import { useParams } from "react-router-dom";
import { getUserAction } from "../../Redux/User Data/action";
import Footer from "../../Components/footer";
const TourDetail = () => {
  const [option, setOption] = useState("daywise");
  const dispatch = useDispatch();
  const { tourObj } = useSelector((store) => store.tourDetailReducer);
  console.log("tourObj",tourObj);
  const { id } = useParams();

  useEffect(() => {
    dispatch(singleTour(id));
    window.scrollTo(0, 0); 
  }, []);

  return (
    <>
      <Navbar />
      <div className={style.parent}>
        {/* --------------------- */}

        <div className={style.banner_section}>
          <Intro data={tourObj} />

          <Banner data={tourObj} />
        </div>

        {/* --------------------- */}

        <div className={style.detail_section}>
          <div>
            <Detail data={tourObj} />
          </div>
          <PriceCard tourObj={tourObj} />
        </div>

        {/* --------------------- */}
        <div className={style.inc_exc_section}>
          <Incandexc />
        </div>
        {/* --------------------- */}

        <div className={style.options_section}>
          <div className={style.options_div}>
            <div
              onClick={() => setOption("daywise")}
              className={option == "daywise" ? style.option : style.non_option}
            >
              <h4>Day Wise Itinerary</h4>
            </div>
            <div
              onClick={() => setOption("policies")}
              className={option == "policies" ? style.option : style.non_option}
            >
              <h4>Policies</h4>
            </div>
          </div>
          <div>
            {option == "daywise" && <Days />}
            {option == "policies" && <Policies />}
          </div>
          <Footer />

        </div>
       
      </div>
    </>
  );
};

export default TourDetail;

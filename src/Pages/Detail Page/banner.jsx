import React, { useEffect, useState } from "react";
import style from "./style/banner.module.css";
const Banner = ({ data }) => {
  const [imgUrl, setUrl] = useState(data.url);
  console.log( "url", imgUrl)

  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div className={style.banner}>
          <img src={imgUrl ? imgUrl: data.url} alt="" />
        </div>
        <div className={style.smallsdiv}>
          <div
            onClick={() => setUrl(data.url)}
            className={imgUrl == data.url ? style.card : ""}
          >
            <img src={data.url} alt="" />
          </div>
          <div
            onClick={() => setUrl(data.url1)}
            className={imgUrl == data.url1 ? style.card : ""}
          >
            <img src={data.url1} alt="" />
          </div>
          <div
            onClick={() => setUrl(data.url2)}
            className={imgUrl == data.url2 ? style.card : ""}
          >
            <img src={data.url2} alt="" />
          </div>
          <div
            onClick={() => setUrl(data.url3)}
            className={imgUrl == data.url3 ? style.card : ""}
          >
            <img src={data.url3} alt="" />
          </div>
          <div
            onClick={() => setUrl(data.url4)}
            className={imgUrl == data.url4 ? style.card : ""}
          >
            <img src={data.url4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import style from "./style/section4.module.css";
import mapImg from "./images/Location.PNG";
import boyImg from "./images/Boy2.PNG";
import divImg from "./images/div.png";
const Section4 = () => {
  return (
    <>
      <div className={style.parent1}>
        <div className={style.left}>
          <img src={boyImg} alt="" />
        </div>
        <div className={style.right}>
          <div>
            <h1>
              OUR <span>STORIES</span> WITH
            </h1>
            <h1>ADVENTURES</h1>
          </div>
          <div>
            <p>
              We are experienced in bringing adventurers to start their journey,
              all outdoor destinations in the world are our specialties.
            </p>
            <br />
            <p>
              So don't hesitate to start your adventure right now, nature has
              already called you !
            </p>
          </div>
          <div className="d-flex" >
            <div>
              <img className="w-100" src={divImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------ */}
      <div className={style.parent}>
        <div className={style.container}>
          <div className={style.top}>
            <h1>
              START YOUR NEW <span>ADVENTURE</span> AROUND THE WORLD
            </h1>
            <div className={style.top_middle} >
              <p>
                There are still many amazing destinations scattered around the
                world you should try to visit all of them
              </p>
            </div>
          </div>
          <div className={style.bottom}>
            <img src={mapImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section4;

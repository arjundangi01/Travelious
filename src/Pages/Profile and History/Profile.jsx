import React from "react";
import style from "./profile.module.css";
import Navbar from "../../Components/navbar";
import Cardprofile from "./cardprofile";
import History from "./history";
const Profile = () => {
  return (
    <>
      <Navbar />
      <div className={style.parent}>
        <div className={style.profile_section}>
          <div className={style.profile_card_div} >
            <Cardprofile />
          </div>
          <div className={style.animation_div} >
           <img src="https://assets.materialup.com/uploads/132da5cf-4213-43fa-961a-b133e0b5f80d/preview.gif" alt="" />
          </div>
        </div>
        <div className={style.history_section}>
          <History />
        </div>
      </div>
    </>
  );
};

export default Profile;

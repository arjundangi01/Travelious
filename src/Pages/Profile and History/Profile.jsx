import React, { useEffect, useState } from "react";
import style from "./profile.module.css";
import Navbar from "../../Components/navbar";
import Cardprofile from "./cardprofile";
import History from "./history";
import PopUp from "./pop";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../Redux/User Data/action";
const Profile = () => {
  const [popup, setPopup] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState({ index: "", obj: {} });
  const [update, setUpdate] = useState(true);
  const initialObj = useSelector((store) => store.userReducer);
  const dispatch = useDispatch();
  const { UserData, bookingHistory } = initialObj;
  // console.log("user",UserData);
  useEffect(() => {
    // console.log("first",UserData)
    dispatch(getUserAction("aby45kuf4ku")).then(() => {
      console.log("done");
      setLoading(false);
    });
  }, []);

  console.log("bookingHistory", bookingHistory);

  return (
    <>
      <Navbar />
      <div className={style.parent}>
        <div className={style.profile_section}>
          <div className={style.profile_card_div}>
            <Cardprofile UserData={UserData} />
          </div>
          <div className={style.animation_div}>
            <img
              src="https://assets.materialup.com/uploads/132da5cf-4213-43fa-961a-b133e0b5f80d/preview.gif"
              alt=""
            />
          </div>
        </div>
        <div className={style.history_section}>
          <div className={style.heading_div}>
            <h3>Booking History</h3>
          </div>
          {loading ? (
            <div >
              <div className={style.info}>
                <div className={style.skeleton}></div>
                <div className={style.skeleton} style={{width: "100%"}}></div>
                <div className={style.skeleton} style={{width: "50%"}}></div>
              </div>
            </div>
          ) : !UserData || bookingHistory.length == 0 ? (
            <div className={style.empty_div}>
              <h1>No Booking Yet !</h1>
            </div>
          ) : (
            bookingHistory?.map((ele, index) => (
              <History
                index={index}
                key={index}
                setSelected={setSelected}
                userObj={UserData}
                ele={ele}
                setPopup={setPopup}
              />
            ))
          )}
        </div>
        {popup && (
          <PopUp
            setUpdate={setUpdate}
            selected={selected}
            UserData={UserData}
            setPopup={setPopup}
          />
        )}
      </div>
    </>
  );
};

export default Profile;

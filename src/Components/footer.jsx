import React from "react";
import style from "./Components styles/footer.module.css";
import logo from "./Footer.PNG"
const Footer = () => {
  return (
    <div className={style.container} >
      <div className={style.top}>
        <div className={style.logo_div}  >
          <img src={logo} alt="" />
          <p>
            Our mission is to make everyone able to feel the attachment back to
            nature by providing an unforgettable experience
          </p>
        </div>
        <div className={style.footer_menu} >
          <div>
            <h3>ABOUT</h3>
            <p>About Us </p>
            <p>Features</p>
            <p>News & Blog</p>
          </div>
          <div>
            <h3>MOVEMENT</h3>
            <p>What Travelious </p>
            <p>Support Us</p>
           
          </div>
          <div>
            <h3>COMPANY</h3>
            <p>Why Travelious</p>
            <p>Capital</p>
            <p>Security</p>
          </div>
          <div>
            <h3>SUPPORT</h3>
            <p>FAQs</p>
            <p>Support Center</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div  className={style.bottom} >
        <div>
          <p>@2023 Travlious. All rights reserved </p>
        </div>
        <div>
          <p>Terms & Agreement Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

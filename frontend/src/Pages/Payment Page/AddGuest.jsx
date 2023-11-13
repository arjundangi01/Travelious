import React from "react";
import styles from "./payment.module.css"
const AddGuest=()=>{

    return(
        <div className={styles.person}>
  <div>
    Title
    <select id="gender" required="">
      <option value="Mr">Mr</option>
      <option value="Mrs">Mrs</option>
      <option value="Miss">Miss</option>
    </select>
  </div>
  <div>
    First Name
    <input type="text"   placeholder="Enter First Name" pattern=".*\S+.*" required />
  </div>
  <div>
    Last Name
    <input type="text"  placeholder="Enter Last Name" required />
  </div>
</div>
    )
}
export default AddGuest;
// import axios from "axios";
// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { Navigate, useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { handleLogin } from "../../Redux/action";
// import { useToast } from "@chakra-ui/react";
// import { getUserAction } from "../../Redux/User Data/action";
// import Navbar from "../../Components/navbar";
// import Footer from "../../Components/footer";
// import style from "./signup.module.css"
// // import "./login.module.css";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const toast = useToast();

//   const containerStyle = {
//     backgroundColor: "#f9ae05",
//     borderRadius: "10px",
//     padding: "20px",
//     width: "400px",
//     boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
//   };

//   const headerStyle = {
//     textAlign: "center",
//     marginBottom: "20px",
//     color: "#185e49",
//     fontSize: "24px",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     border: "1px solid #185e49",
//     borderRadius: "5px",
//   };

//   const buttonStyle = {
//     backgroundColor: "#f05a1f",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     padding: "10px 15px",
//     cursor: "pointer",
//     width: "100%",
//     fontWeight: "bold",
//     margin: "5px",
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .get(`http://localhost:8080/users?email=${email}&password=${password}`)
//       .then((response) => {
//         if (response.data.length === 1) {
//           dispatch(handleLogin());
//           toast({
//             title: "LOGIN SUCCESSFUL",
//             status: "success",
//             position: "top",
//             duration: 3000,
//             isClosable: true,
//           });
//           dispatch(getUserAction(email));
//           navigate("/");
//         } else {
//           console.log("wrong username or password");
//           toast({
//             title: "Wrong Username or Password",
//             status: "error",
//             position: "top",
//             duration: 3000,
//             isClosable: true,
//           });
//         }
//       });
//   };

//   return (
//     <> <Navbar/>
//     <div
//       style={{
//         // backgroundColor: '#185e49',
//         fontFamily: "fjalla One, sans-serif",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "90vh",
//         margin: "0",
//         }}
//         className={style.parent}
//     >
//       <div style={containerStyle}>
//         <h2 style={headerStyle}>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="username"
//               style={{ color: "#185e49", fontWeight: "bold" }}
//             >
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               style={inputStyle}
//               value={email}
//               onChange={handleEmail}
//             />
//           </div>
//           <div style={{ marginBottom: "15px" }}>
//             <label
//               htmlFor="password"
//               style={{ color: "#185e49", fontWeight: "bold" }}
//             >
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               required
//               style={inputStyle}
//               value={password}
//               onChange={handlePassword}
//             />
//           </div>
//           <button type="submit" style={buttonStyle}>
//             Login
//           </button>
//         </form>
//         <Link to="/signup" style={headerStyle}>
//           Sign Up
//         </Link>
//       </div>
//       </div>
//       <div style={{ width: "100%", margin: "auto", backgroundColor:"#ffe5d1" }}>
//         <Footer />
//       </div>
//       </>
//   );
// };

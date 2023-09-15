import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';

// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { ChakraProvider } from '@chakra-ui/react';
// import { Provider } from 'react-redux';
// import { store } from './Redux/store';
// import { extendTheme } from '@chakra-ui/react';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const breakpoints = {
//   sm: '320px',
//   md: '768px',
//   lg: '960px',
//   xl: '1200px',
//   '2xl': '1536px',
// }
// const theme = extendTheme({breakpoints})
// root.render(
//   <BrowserRouter>
// <ChakraProvider>
//     <Provider store={store} >
//  <App />
//    </Provider>
// </ChakraProvider> 
// </BrowserRouter>
    
  
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

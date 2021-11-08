import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj_P5ck4vWvTp8cQr6vi5aHdxeqyOm8f8",
  authDomain: "chat-tryout-82e71.firebaseapp.com",
  projectId: "chat-tryout-82e71",
  storageBucket: "chat-tryout-82e71.appspot.com",
  messagingSenderId: "1083291194871",
  appId: "1:1083291194871:web:70600ca80575d57d070af2",
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

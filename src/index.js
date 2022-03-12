import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";
import Ques1 from "./Routes/apply-for-jobs/ques-1/Ques-1";
import Ques2 from "./Routes/apply-for-jobs/ques-2/Ques-2";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-for-jobs/Ques-1" element={<Ques1 />} />
        <Route path="/apply-for-jobs/Ques-2" element={<Ques2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
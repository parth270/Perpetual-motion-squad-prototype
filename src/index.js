import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Routes/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Routes/Login";
import SignUp from "./Routes/SignUp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

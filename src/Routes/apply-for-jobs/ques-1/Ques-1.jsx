import React from "react";
import classes from "./Ques-1.module.css";
import { useNavigate } from "react-router-dom";

const Ques1 = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes["sm-container"]}>
        <h1>Q.1: Are you a college student or a graduate?</h1>
        <div
          onClick={() => {
            navigate("/apply-for-jobs/Ques-2");
          }}
        >
          <span>College student</span>
        </div>
        <div>
          <span>Graduate</span>
        </div>
      </div>
      <div className={classes["display-container"]}>
        <lottie-player
          src="https://assets4.lottiefiles.com/private_files/lf30_rg5wrsf4.json"
          background="#282B28"
          speed="1"
          style={{width:"300px", height:" 300px"}}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Ques1;

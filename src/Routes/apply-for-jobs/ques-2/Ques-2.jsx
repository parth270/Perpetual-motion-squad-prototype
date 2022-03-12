import React from "react";
import classes from "./Ques-2.module.css";
import { useNavigate } from "react-router-dom";

const Ques2 = () => {

    const navigate = useNavigate();

  return (
    <div className={classes.container}>
      <div className={classes["sm-container"]}>
        <h1>Q.2: In which college are you studying?</h1>
        <div
          onClick={() => {
            navigate("/apply-for-jobs/Ques-2");
          }}
        >
          <span>First</span>
        </div>
        <div>
          <span>Second</span>
        </div>
        <div>
          <span>Third</span>
        </div>
        <div>
          <span>Fourth</span>
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

export default Ques2;

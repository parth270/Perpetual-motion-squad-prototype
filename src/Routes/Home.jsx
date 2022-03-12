import React from "react";
import Card from "../components/Card/Card";
import { Link } from "react-router-dom";
import classes from "../assets/styles/front.module.css";

const Nav = () => {
  return (
    <div className="navigation-container">
      <div className="main-name-container">
        <p className="Main-name">JobQuicker</p>
        <div className="border-bottom-line" />
      </div>
      <p className="login-route">
        <Link to="/Login">Login</Link> | <Link to="/SignUp"> Sign up</Link>
      </p>
    </div>
  );
};

function App() {
  // const [button, setButton] = React.useState(false);
  // const [Button, setButton1] = React.useState(false);

  return (
    <Card justify="center" align="center" direction="column">
      <Nav />
      <div className={classes.container}>
        <div className={classes.left}>
          <h1>A Platform that will lead you to your dream job</h1>
          <p className={classes["middle-p"]}>
            Our AI-backed Intelligent Talent Cloud helps you source, vet, match
            and manage the world's best software developers remotely.
          </p>
          <button className={classes["btn-hire"]} >
            <span><Link to="/apply-for-jobs/Ques-1" >Apply for Jobs</Link></span>
            {/* <img src="/arrow.svg" alt="" /> */}
          </button>
          <p className={classes["bottom-p"]}>
            <span>Looking to hire students instead?</span>

            <span className={classes.apply}  >
              Hire Developers <div className={classes["button-border-line"]} />
            </span>
          </p>
        </div>
        <div className={classes.right}>
          <img src="/boy-with-glasses.jpg" alt="" />
        </div>
      </div>
    </Card>
  );
}

export default App;

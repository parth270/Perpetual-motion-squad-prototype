import React from "react";
import Card from "../components/Card/Card";
import {Link} from 'react-router-dom'

function App() {

  return (
    <Card justify="center" align="center" direction="column" >
      <h1 className="center" >The Welcome Page</h1>
      <div className="navigation-container">
          <p><Link to="/Login" >Login</Link> | <Link to="/SignUp" > SignUp</Link></p>
        </div>
    </Card>
  );
}

export default App;
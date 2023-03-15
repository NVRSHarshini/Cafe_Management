import React from "react";
import Layout from "./../components/Layout";
import { Link } from "react-router-dom";
import main from "../images/main.jpg";
import "./HomeStyles.css";

const Home = () => {
  return (
    
    <Layout>
      <center>
      <div className="home" style={{ backgroundImage: `url(${main})` ,backgroundSize: 'cover',}}>
        <div className="headerContainer">
          <h1>CAFE MANAGEMENT</h1>
          <p>Let's Have Some Coffee.!</p>
          <Link to="/Login">
          {/* <Link to="/menu"> */}
            <button >Order Now</button>

          </Link>
        </div>
      </div>
      </center>
    </Layout>
    
  );
};

export default Home;

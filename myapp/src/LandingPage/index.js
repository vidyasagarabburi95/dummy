import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "./index.css";
import NavBar from "../NavBar";

const LandingPage = () => (
  <div className="t">
    <div className="news-letter">
      <input type="text" placeholder="Enter your email address" />
      <button>Send Now</button>
    </div>
    <NavBar />
    <div>
      <FaFacebook />
      <FaGoogle />
      <FaTwitter />
    </div>
  </div>
);

export default LandingPage;

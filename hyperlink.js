import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

import { Header1 } from "./Header1";
import "./hyperlink.css";
export function Hyperlink() {
  return (
    <>
    <Header1></Header1>
    <div className="body">
      <div classNameName="Loginheading">
        <h1 className="aiatit" >AIA MULTISPECIALITY HOSPITAL</h1>
        <br />
        <h2>Welcome to user portal</h2>
      </div>
      <div className="page">
        <button id="bt1" className="one">
          <div className="butbg">
            {/* <b> Click here to</b> <br /> */}
            <Link to="/add-patient" className="linktag">Add patient</Link>
          </div>
        </button>
      </div>
      </div>
      <Footer></Footer>
    </>
  );
}

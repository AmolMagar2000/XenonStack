import React from "react";
import { Link } from "react-router-dom";
import "./aboutmain.css";
import insuranceimg from "../Images/insurance.jpg";
import building from "../Images/1(5).jpg";
import { Header } from "./Header";
import Footer from "./Footer";
export function Aboutmain() {
  return (
    <>
    <Header></Header>
      <div>
        <img src={building} alt="no" className="BuildImg" />
        <div id="about">
          <h3 className="aboutus">About Us</h3>
          <p>
            {" "}
            Healthcare is the most important aspect of life, and the pandemic
            has made this true more than ever. At AIA Multi-speciallity
            Hospital, our exceptional team of doctors, nurses and caregivers
            come together to bring you excellent care with the latest
            technologies, best medicine, and warmest service. The AIA
            Multi-speciallity Hospital is situated in Satana (Madhya Pradesh).
            The teaching hospital occupies 25 acres of land on a sprawling lush
            green campus. The hospital not only functions for clinical training
            of undergraduate and postgraduate students but also caters to the
            medical needs of a large segment of population of South Pune as well
            as the surrounding rural areas including poor and needy patients. At
            AIA Multi-speciallity hospital, our vision is to be the most well
            regarded healthcare provider in India committed to the highest
            standards of clinical excellence and patient care, supported by
            latest technology and cutting edge research. We ask more of
            ourselves, so we can give more to our patients. We push the
            boundaries of excellence in everything we do, so we can deliver the
            highest standards in patient-centred care. Every day we come to
            honour a higher purpose - To serve. To excel.
          </p>
        </div>
        <div>
          <h3 className="insurance">Our Insurance Partners</h3>
        </div>
        <div>
          <img src={insuranceimg} alt="no img" className="insu-img" />
        </div>
        {/* <p>
          <Link to={"/login"}>sign up </Link>/<Link to={"/"}> Home page</Link>
        </p> */}
      </div>
      <Footer></Footer>
    </>
  );
}

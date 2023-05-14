import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { saveUser } from "../services/SignupAPI";
import logo from "../Images/Logo1.jpg";
import "./signup.css";

export const Signup = () => {
  const [details, setDetails] = useState();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
    console.log(details);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleContactDetails();
    alert("Registered successfully..!")
  };

  const handleContactDetails = async () => {
    const data = await saveUser(details);

    //     if (data.message == "success") {
    //       document.getElementById("myForm").reset();

    //       document.getElementById("success").innerHTML = "Successfully submitted.";

    //       setTimeout(() => {
    //         document.getElementById("success").innerHTML = " ";
    //       }, 6000);
    //     } else if (data.message == "error") {
    //       document.getElementById("failed").innerHTML =
    //         "Failed to submit. Please try again!";

    //       setTimeout(() => {
    //         document.getElementById("failed").innerHTML = " ";
    //       }, 6000);
    //     }
  };
  return (
    <>
      <div class="imgbg">
        <div className="container2">
          <form className="card card2 mt-5 " onSubmit={handleSubmit} style={{opacity:"0.6",backgroundColor:"#000000"}}>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label for="validationDefault01">First name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault01"
                  placeholder="First name"
                  required
                  name="First_Name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label for="validationDefault02">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault02"
                  placeholder="Last name"
                  required
                  name="Last_Name"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-3">
                <label for="validationDefaultUsername">Username</label>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">
                      <img
                        src={logo}
                        alt="NO IMAGE FOUND"
                        width="25"
                        height="24"
                      />
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
                    required
                    name="User_Name"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4 mb-3">
                <label for="validationDefault03">Id number</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault03"
                  placeholder="Id Number"
                  required
                  name="Id_Number"
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-1">
                <label for="validationDefault05">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="Password"
                  required
                  name="Password"
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4 mb-1">
                <label for="validationDefault05">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationDefault05"
                  placeholder="City"
                  required
                  name="City"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
              <Link to={"/log-in"}>
                <button className="btn btn-primary" type="button">
                  Go to login
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

import React, { useState } from "react";
import "./login.css";

import { Link, Route } from "react-router-dom";
import { validateUser } from "../services/LoginAPI";
import { useNavigate } from "react-router-dom/dist";

export function Login() {
  const [formData, setFormData] = useState({username:"", password:""});
  const [loginValidate, setFormLogin] = useState(false);
  const navigate = useNavigate();

  function handleChange(event) {
    console.log(formData);
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await validateUser(formData);
    
    if (response.data.length == 0) {
      
      alert("Sorry user not found. Please create new account..!");
    }
    else{
      // setFormLogin(true);
      navigate("/menu");
    }
  };
  return (
    <>
    
      <div className="imgbg">
        <div className id="bodymain">
          <div className="card mt-5" style={{opacity:"0.65",backgroundColor:"#000000"}}>
            <br />
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form className="p-5">
                  <h3>Log in to your account</h3>
                  <br />

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="loginName"
                      className="form-control col-md-10"
                      required
                      onChange={handleChange}
                      name="username"
                    />
                    <label className="form-label">username</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control col-md-10"
                      required
                      onChange={handleChange}
                      name="password"
                    />
                    <label
                      className="form-label"
                      for="loginPassword"
                      font-size="50px"
                    >
                      Password
                    </label>
                  </div>

                  <Link to={"/menu"}>
                    <button
                      type="button"
                      className="btn btn-primary btn-block mb-4 col-md-10"
                      onClick={handleLogin}
                    >
                      Sign in
                    </button>
                  </Link>
                  <div className="text-left">
                    <p>
                      click here for : <br />
                      <Link to={"/signup"} className="SignuHome">
                        <b>Sign up</b> /
                      </Link>
                      <Link to={"/"} className="SignuHome">
                        <b>Home page</b>
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

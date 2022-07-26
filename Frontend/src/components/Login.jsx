import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { dispatchLogin } from "../redux/actions/authAction";
import { useDispatch } from "react-redux";
import "./CSS/LoginUi.css"
import email from "../image/email.jpg";
import profile from"../image/a.png";
import pass from "../image/pass.png";
export default function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user", user);

    try {
      const response = await axios.post("user/login", user);
      alert(response.data.msg);
      localStorage.setItem("Login", true);
      console.log("response", response.data.data);
      localStorage.setItem("LocalUser", JSON.stringify(response.data.data));
      navigate("/reg");

      dispatch(dispatchLogin());
    } catch (error) {
      alert(error.response.data.msg);
    }
  };
  return (
    <div className="main1">
    <div className="sub-main1">
    <div>
 
   <div className="imgs1">
           <div className="container-image1">
          <img src={profile} alt="profile" className="profile"/>

</div>
</div>

<div>
        <h1>Login Here</h1>

        <form onSubmit={handleSubmit}>
     <div>
        
         
          <img src={email} alt="email" className="email"/>
          

          <input
            type="email"
            name="email"
            className="name"
            placeholder="Enter Email"
            onChange={handleChange}
          />
        
        </div>

          <div className="second-input">
          <img src={pass} alt="pass" className="email"/>
          <input
            type="password"
            name="password"
            className="name"
            placeholder="Enter Password"
            onChange={handleChange}
          />
          </div>
          
          <div className="login-button" type="submit" name="submit">
          <button>Login</button>
          </div>
        </form>
        </div>
        </div>
        </div>
    </div>
  );
}

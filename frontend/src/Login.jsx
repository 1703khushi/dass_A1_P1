import React, { useState, useEffect } from "react";
import Home from "./Home";
import { Error_ } from "./Error-";
import { Navigate, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import RedditIcon from "@mui/icons-material/Reddit";
import LogoutIcon from "@mui/icons-material/Logout";
export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // this is because nhi to page refresh hojayega and state lose krdega
    if (username !== "admin" || pass !== "admin") {
      setUsername("");
      setPass("");
      navigate("/error");
    } else if (username === "admin" && pass === "admin") {
      localStorage.setItem("token", JSON.stringify({ username, pass }));
      navigate("/");
    }
  };

  return (
    <div className="form_cont">
      <h2 className="text">Login</h2>
      <form className="login_form" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="username"
          placeholder="Username"
          id="username"
          name="username"
          required
        />
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
        />
        <button className="l_btn" type="submit">
          Log In
        </button>
      </form>
      <button
        className="link_btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register
      </button>
    </div>
  );
};

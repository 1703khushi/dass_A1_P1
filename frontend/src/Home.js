import React from "react";
import { useState, useEffect } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [currForm, setCurrForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrForm(formName);
  };
  
  return (
    <div className="App">
      {currForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Home;

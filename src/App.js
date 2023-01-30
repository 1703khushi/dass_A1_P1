import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import Home from "./Home";
import { Error_ } from "./Error-";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<ProfilePage />} />
        <Route path='home' element={<Home />} />
        <Route element={<Error_ />} />
      </Route>
    </Routes>
  );
}

export default App;

import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import RedditIcon from "@mui/icons-material/Reddit";
import LogoutIcon from '@mui/icons-material/Logout';
const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/home");
  };
  
  return (
    <div className="header">
      <div className="headerLeft">
        <RedditIcon fontSize= "large" />
        <span className="greddiit">Greddiit</span>
      </div>
      <div className="headerCenter">
        <div className="search">
          <SearchIcon fontSize="medium" style={{ marginLeft:5}}/>
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="headerRight">
        <button className="logout" onClick={handleLogout}>
        <LogoutIcon />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;

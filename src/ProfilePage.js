import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [followers, setFollowers] = useState([
    {
      id: 1,
      follower: "Name 1",
    },
    {
      id: 2,
      follower: "Name 2",
    },
    {
      id: 3,
      follower: "Name 3",
    },
  ]);
  const [followings, setFollowings] = useState([
    {
      id: 1,
      following: "User 1",
    },
    {
      id: 2,
      following: "User 2",
    },
    {
      id: 3,
      following: "User 3",
    },
    {
      id: 4,
      following: "User 4",
    },
    {
      id: 5,
      following: "User 5",
    },
  ]);
  const handleDelete = (id) => {
    const listFollowers = followers.filter((follower) => follower.id !== id);
    setFollowers(listFollowers);
    localStorage.setFollowers("Followerlist", JSON.stringify(listFollowers));
  };

  useEffect(() => {
    const data = JSON.stringify(localStorage.getItem("token"));
    if(data === 'null'){
      navigate('/home')
    }

  },[])

  
  const handleDelete_ = (id) => {
    const listFollowings = followings.filter(
      (following) => following.id !== id
    );
    setFollowings(listFollowings);
    localStorage.setFollowings("Followinglist", JSON.stringify(listFollowings));
  };

  return (
    <div className="profile">
      <Header />
      <Content
        followers={followers}
        handleDelete={handleDelete}
        followings={followings}
        handleDelete_={handleDelete_}
      />
      <Footer />
    </div>
  );
};

export default ProfilePage;

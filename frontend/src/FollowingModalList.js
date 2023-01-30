import React from "react";
import { FollowingModal } from "./FollowingModal";

export const FollowingModalList = ({ followings, handleDelete_ }) => {
  return followings.map((following) => (
    <FollowingModal following={following} handleDelete_={handleDelete_} />
  ));
};

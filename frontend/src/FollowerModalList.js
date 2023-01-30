import { ScreenshotMonitorSharp } from "@mui/icons-material";
import React from "react";
import { FollowerModal } from "./FollowerModal";

export const FollowerModalList = ({ followers, handleDelete }) => {
  return followers.map((follower) => (
    <FollowerModal follower={follower} handleDelete={handleDelete} />
  ));
};

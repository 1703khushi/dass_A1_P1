import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";

export const FollowerModal = ({ follower, handleDelete }) => {
  return (
    <li key={follower.id} className={"follower_"}>
      <label>
        {follower.follower}
        <RemoveIcon
          onClick={() => handleDelete(follower.id)}
          role="button"
          tabIndex="0"
        />
      </label>
      <button className="visit">
        Visit ProfilePage
      </button>
    </li>
  );
};

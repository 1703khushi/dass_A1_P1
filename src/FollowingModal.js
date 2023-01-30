import React from "react";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

export const FollowingModal = ({ following, handleDelete_ }) => {
  return (
    <li key={following.id} className={"follower_"}>
      <label>
        {following.following}
        <PersonRemoveIcon
          onClick={() => handleDelete_(following.id)}
          role="button"
          tabIndex="0"
        />
      </label>
      <button className="visit">Visit ProfilePage</button>
    </li>
  );
};

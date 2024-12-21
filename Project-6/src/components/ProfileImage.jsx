import React from "react";

const ProfileImage = ({ imageUrl }) => (
  <div className="h-[12rem] mb-4">
    <img
      src={imageUrl}
      alt="Profile"
      className="w-full h-full rounded-full shadow-[rgba(0,0,0,0.2)_-13px_11px_12px_0px] "
    />
  </div>
);

export default ProfileImage;

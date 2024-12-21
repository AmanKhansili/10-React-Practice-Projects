import React from "react";

const ProfileDetails = ({ firstName, lastName, gender, phone, email, address }) => (
  <div className="text-start">
    <p className="text-5xl font-semibold">
      {firstName} {lastName}
    </p>
    <p className="text-lg font-medium capitalize">{gender}</p>
    <p className="text-lg">
      <span className="font-semibold">Phone:</span> {phone}
    </p>
    <p className="text-lg">
      <span className="font-semibold">Email:</span> {email}
    </p>
    <p className="text-lg">
      <span className="font-semibold">Address:</span>
      {` ${address.city} ${address.state}, ${address.country}`}
    </p>
  </div>
);

export default ProfileDetails;

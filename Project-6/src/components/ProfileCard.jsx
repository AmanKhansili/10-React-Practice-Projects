import React, { useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import ProfileDetails from "./ProfileDetails";

const ProfileCard = () => {
  const API = "https://randomuser.me/api/?page=1&results=1&seed=abc";
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API);
        const result = await response.json();
        setData(result.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <>
      <ProfileImage imageUrl={data.picture.large} />
      <ProfileDetails
        firstName={data.name.first}
        lastName={data.name.last}
        gender={data.gender}
        phone={data.phone}
        email={data.email}
        address={data.location}
      />
    </>
  );
};

export default ProfileCard;

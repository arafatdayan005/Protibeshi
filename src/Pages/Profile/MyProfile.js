import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

function MyProfile() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);
  return (
    <>
      <p className="text-center font-bold text-5xl tracking-tight font-serif dark:text-white">
        Personal Information
      </p>
      <p className="mt-12 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Name: </span>
        {userData?.name}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Email: </span>
        {userData?.email}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Gender: </span>
        {userData?.gender || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Birthday: </span>
        {userData?.birthday || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Phone: </span>
        {userData?.phone || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Road: </span>
        {userData?.road || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Area: </span>
        {userData?.area || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">City: </span>
        {userData?.city || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Latitude: </span>
        {userData?.latitude || "Not Given"}
      </p>
      <p className="mt-4 text-2xl font-medium">
        <span className="text-xl italic text-gray-500">Longitude: </span>
        {userData?.longitude || "Not Given"}
      </p>
      {userData?.iframe && (
        <div className="absolute bottom-10 right-10 h-80 w-80">
          <iframe
            title={userData?._id}
            src={userData?.iframe}
            className="h-80 w-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      )}
    </>
  );
}

export default MyProfile;

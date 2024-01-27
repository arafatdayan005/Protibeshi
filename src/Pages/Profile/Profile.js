import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "./ProfileSidebar";

function Profile() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  return (
    <div className="bg-[#F4F5F6]">
      <div className="max-w-[85%] mx-auto flex gap-8 py-5">
        <ProfileSidebar userData={userData} />
        <div className="bg-white rounded-3xl w-full p-10 relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Profile;

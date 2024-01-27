import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

function ProfileSidebar({ userData }) {
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="bg-[#00b8a919] rounded-3xl p-8 h-full">
      <img
        className="rounded-full w-64 h-48 pt-2 px-6 pb-4"
        src={userData?.photo}
        alt=""
      />
      <p className="text-center text-2xl font-semibold">{userData.name}</p>
      <p className="text-center text-lg font-bold mt-4">
        {userData.credit}.00$
      </p>
      <p className="text-center text-[#a8a8a8] text-lg font-medium">
        Available Credit
      </p>
      <Link
        to="/profile/myprofile"
        className="bg-white mt-4 flex p-2 text-gray-900 rounded-xl hover:bg-[#F4F5F6]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-3 text-lg font-semibold">My Profile</span>
      </Link>
      <Link
        to="/profile/edit"
        className="bg-white mt-1 flex p-2 text-gray-900 rounded-xl hover:bg-[#F4F5F6]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
        </span>
        <span className="ml-3 text-lg font-semibold">Edit Profile</span>
      </Link>
      <Link
        to="/profile/wallet"
        className="bg-white mt-1 flex p-2 text-gray-900 rounded-xl hover:bg-[#F4F5F6]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 22 22"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M4.5 3.75a3 3 0 0 0-3 3v.75h21v-.75a3 3 0 0 0-3-3h-15Z" />
            <path
              fillRule="evenodd"
              d="M22.5 9.75h-21v7.5a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-7.5Zm-18 3.75a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-3 text-lg font-semibold">My Wallet</span>
      </Link>
      <Link
        to="/"
        className="bg-white mt-20 flex p-2 text-gray-900 rounded-xl hover:bg-[#F4F5F6]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
            <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
          </svg>
        </span>
        <span className="ml-3 text-lg font-semibold">Back to Home</span>
      </Link>
      <Link
        onClick={() => {
          logOut();
          navigate("/");
        }}
        to="/"
        className="bg-white mt-1 flex p-2 text-gray-900 rounded-xl hover:bg-[#F4F5F6]"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-3 text-lg font-semibold">Logout</span>
      </Link>
    </div>
  );
}

export default ProfileSidebar;

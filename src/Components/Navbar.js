import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (user && user.email !== "admin@protybeshi.com") {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setUserData(data));
    }
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav className="bg-[#00B8A8] border-gray-200 dark:bg-gray-900 fixed w-full z-20 py-2">
        <div className="flex flex-wrap items-center justify-between max-w-[85%] mx-auto">
          <a href="/" className="flex items-center">
            <h1 className="logo self-center whitespace-nowrap text-white">
              Protybeshi
            </h1>
          </a>
          <div className="md:order-2 flex items-center space-x-4">
            {user && (
              <p className="flex text-white text-lg font-semibold mr-8">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 h-7 mr-1"
                  >
                    <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 0 1-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004ZM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 0 1-.921.42Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v.816a3.836 3.836 0 0 0-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 0 1-.921-.421l-.879-.66a.75.75 0 0 0-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 0 0 1.5 0v-.81a4.124 4.124 0 0 0 1.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 0 0-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 0 0 .933-1.175l-.415-.33a3.836 3.836 0 0 0-1.719-.755V6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {userData.credit}
              </p>
            )}
            {user && (
              <div className="relative" onClick={() => setToggle(!toggle)}>
                {user.photoURL ? (
                  <img
                    className="h-12 rounded-full cursor-pointer"
                    src={user.photoURL}
                    referrerPolicy="no-referrer"
                    alt=""
                  />
                ) : (
                  <img
                    className="h-12 rounded-full cursor-pointer"
                    src="https://www.pngmart.com/files/22/User-Avatar-Profile-PNG-Isolated-Transparent.png"
                    alt=""
                  />
                )}
                {toggle && (
                  <div className="absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-xl w-52 dark:bg-gray-700 dark:divide-gray-600">
                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                      <div>{user.displayName}</div>
                      <div className="font-medium truncate">{user.email}</div>
                    </div>
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownUserAvatarButton"
                    >
                      <li>
                        <Link
                          to="/dashboard"
                          className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Profile
                        </Link>
                      </li>
                    </ul>
                    <div className="py-2">
                      <button
                        onClick={handleLogOut}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            <Link to="/additem">
              <button className="bg-[#4E3CB8] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#3f308f]">
                Start Listing
              </button>
            </Link>
            {!user && (
              <Link to="/login" className="text-white underline font-semibold">
                Login/Signup
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

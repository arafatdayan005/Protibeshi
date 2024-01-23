import React, { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const [toggle, setToggle] = useState(false);
  const { user, loader, role, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loader) {
    <p>loading..</p>;
  }

  return (
    <>
      <button
        onClick={() => setToggle(!toggle)}
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-3 py-4 overflow-y-auto bg-[#ccf1ee] dark:bg-gray-800">
          <a href="/" className="flex items-center">
            <h1 className="logo self-center whitespace-nowrap text-[#00b8a8] ml-4">
              Protybeshi
            </h1>
          </a>
          <div className="my-8 flex flex-col items-center">
            <img className="rounded-full" src={user?.photoURL} alt="" />
            <p className="capitalize text-xl font-semibold mt-4 dark:text-white">
              {user?.displayName}
            </p>
            {user?.email !== "admin@protybeshi.com" && (
              <p className="bg-emerald-400 text-white px-2 rounded-full mt-2 uppercase">
                {role}
              </p>
            )}
          </div>

          {user?.email === "admin@protybeshi.com" ? (
            <ul className="space-y-2 font-medium">
              <div>
                <li>
                  <Link
                    to="/dashboard/admin/allusers"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
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
                          d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z"
                          clipRule="evenodd"
                        />
                        <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                      </svg>
                    </span>
                    <span className="ml-3 text-lg font-semibold">
                      All Users
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/pendingposts"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
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
                          d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
                          clipRule="evenodd"
                        />
                        <path
                          fillRule="evenodd"
                          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="ml-3 text-lg font-semibold">
                      All Posts
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/admin/giftcards"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="M9.375 3a1.875 1.875 0 0 0 0 3.75h1.875v4.5H3.375A1.875 1.875 0 0 1 1.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0 1 12 2.753a3.375 3.375 0 0 1 5.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 1 0-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3ZM11.25 12.75H3v6.75a2.25 2.25 0 0 0 2.25 2.25h6v-9ZM12.75 12.75v9h6.75a2.25 2.25 0 0 0 2.25-2.25v-6.75h-9Z" />
                      </svg>
                    </span>
                    <span className="ml-3 text-lg font-semibold">
                      Gift Cards
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          ) : (
            <ul className="space-y-2 font-medium">
              <div>
                <li>
                  <Link
                    to="/dashboard/user/mystuff"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                  >
                    <span className="ml-3 text-lg font-semibold">My Stuff</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/user/myborrowings"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                  >
                    <span className="ml-3 text-lg font-semibold">
                      My Borrowings
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/user/mylendings"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
                  >
                    <span className="ml-3 text-lg font-semibold">
                      My lendings
                    </span>
                  </Link>
                </li>
              </div>
            </ul>
          )}
          <div className="absolute bottom-10">
            <Link
              to="/"
              className="flex items-center p-2 -mr-3.5 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
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
              className="flex items-center p-2 -mr-3.5 text-gray-900 rounded-lg dark:text-white hover:bg-green-100 dark:hover:bg-gray-700"
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
              <span className="ml-3 pr-32 text-lg font-semibold">Logout</span>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;

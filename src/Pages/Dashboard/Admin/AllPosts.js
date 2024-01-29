import React, { useEffect, useState } from "react";
import { getAllItems, itemStatus } from "../../../API/Item";
import { Link } from "react-router-dom";
import tick from "./../../../Images/Flat_tick_icon.svg.png";
import cross from "./../../../Images/Flat_cross_icon.svg.png";

function AllPosts() {
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    getAllItems().then((data) => {
      setData(data);
    });
  }, [reload]);

  const handleAccept = (_id) => {
    const setStatus = {
      status: "Available",
    };

    const res = itemStatus(_id, setStatus);
    if (res) {
      setReload(!reload);
    }
  };

  const handleReject = (_id) => {
    const setStatus = {
      status: "Rejected",
    };

    const res = itemStatus(_id, setStatus);
    if (res) {
      setReload(!reload);
    }
  };

  return (
    <>
      {data.length === 0 ? (
        <div className="text-[200px] ml-[200px] mt-[200px] text-[#f4f5f6]">
          Not Available
        </div>
      ) : (
        <div>
          <p className="text-center font-bold text-5xl tracking-tight pt-10 font-serif dark:text-white">
            All Posts
          </p>
          <div className="max-w-[85%] mx-auto mt-8 pb-16">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <div className="flex justify-between items-center">
                <div className="pb-4 bg-white dark:bg-gray-900">
                  <label htmlFor="table-search" className="sr-only">
                    Search
                  </label>
                  <div className="relative mt-1">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="table-search"
                      className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500"
                      placeholder="Search for posts"
                    />
                  </div>
                </div>
                <button className="py-2 px-4 bg-emerald-500 text-white rounded-lg">
                  Sort by
                </button>
              </div>

              <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400 border">
                <thead className="text-xs text-center text-gray-700 uppercase bg-green-100 dark:bg-gray-700 dark:text-gray-400 rounded-full">
                  <tr>
                    <th scope="col" className="py-3 text-lg">
                      No.
                    </th>
                    <th scope="col" className="py-3 text-lg ps-3 text-left">
                      Photo
                    </th>
                    <th scope="col" className="py-3 text-lg">
                      Name
                    </th>
                    <th scope="col" className="py-3 text-lg p-4">
                      Category
                    </th>
                    <th scope="col" className="py-3 text-lg">
                      Price
                    </th>
                    <th scope="col" className="py-3 text-lg p-8">
                      Area
                    </th>
                    <th scope="col" className="py-3 text-lg">
                      Accept
                    </th>
                    <th scope="col" className="py-3 px-8 text-lg">
                      Reject
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((d, i) => (
                    <tr
                      key={d._id}
                      className="bg-white text-center border-b dark:bg-gray-700 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4 text-lg">{i + 1}</td>
                      <td className="py-4">
                        <img className="w-16 ml-2" src={d.photos} alt="" />
                      </td>
                      <td className="py-4 font-medium text-lg">
                        <Link to={`/details/${d._id}`}>{d.name}</Link>
                      </td>
                      <td className="py-4 font-medium text-lg">{d.category}</td>
                      <td className="py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white text-lg">
                        {d.price}
                      </td>
                      <td className="py-4 font-medium text-gray-900 text-center whitespace-nowrap dark:text-white text-lg">
                        {d.area}
                      </td>
                      <td className="py-4 w-20">
                        <button
                          className={`${
                            d.status === "Available" &&
                            "cursor-not-allowed opacity-50"
                          }`}
                          onClick={() => handleAccept(d._id)}
                          disabled={d.status === "Available"}
                        >
                          <img className="w-8" src={tick} alt="" />
                        </button>
                      </td>
                      <td className="py-4 w-20">
                        <button
                          className={`${
                            d.status === "Rejected" &&
                            "cursor-not-allowed opacity-50"
                          }`}
                          onClick={() => handleReject(d._id)}
                          disabled={d.status === "Rejected"}
                        >
                          <img className="w-8" src={cross} alt="" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AllPosts;

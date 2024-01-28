import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { postProfile } from "../../API/Profile";
import Swal from "sweetalert2";

function EditProfile() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  const handleSubmitProfile = (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const birthday = form.birthday.value;
    const gender = form.gender.value;
    const phone = form.phone.value;
    const road = form.road.value;
    const area = form.area.value;
    const city = form.city.value;
    const map = form.iframe.value;
    const location = form.location.value;

    const src = map?.split(" ");
    const url = src[1]?.split('"');

    const coordinatesArray = location.split(", ");

    const latitude = coordinatesArray[0];
    const longitude = coordinatesArray[1];

    const data = {
      name,
      phone,
      gender,
      birthday,
      road,
      area,
      city,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      iframe: url?.[1],
    };

    if (!JSON.parse(localStorage.getItem("Location"))?.latitude) {
      localStorage.setItem(
        "Location",
        JSON.stringify({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        })
      );
    }

    postProfile(user?.email, data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Your profile has been updated",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <>
      <p className="text-center font-bold text-5xl tracking-tight font-serif dark:text-white mb-12">
        Edit Profile
      </p>
      <form onSubmit={handleSubmitProfile}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              defaultValue={userData?.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Number
            </label>
            <input
              type="number"
              name="phone"
              placeholder="+880 "
              defaultValue={userData?.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
              defaultValue={userData?.email}
              disabled
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Geo-location Coordinate
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
              type="text"
              name="location"
              placeholder="e.g: 23.69510781937833, 90.45102680192862"
              defaultValue={
                JSON.parse(localStorage.getItem("Location"))?.latitude &&
                `${JSON.parse(localStorage.getItem("Location"))?.latitude}, ${
                  JSON.parse(localStorage.getItem("Location"))?.longitude
                }`
              }
            ></input>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Gender
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
              name="gender"
            >
              {userData?.gender === "Male" ? (
                <option defaultValue value="Male">
                  Male
                </option>
              ) : userData?.gender === "Female" ? (
                <option defaultValue value="Female">
                  Female
                </option>
              ) : (
                <option selected defaultValue>
                  Choose your gender
                </option>
              )}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Birthday
            </label>
            <input
              type="date"
              name="birthday"
              defaultValue={userData?.birthday}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
            />
          </div>
          <div className="col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
              <div>
                <label className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white">
                  Road
                </label>
                <input
                  type="text"
                  name="road"
                  placeholder="Enter Road"
                  defaultValue={userData?.road}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white">
                  Area
                </label>
                <input
                  type="text"
                  name="area"
                  placeholder="Enter Area"
                  defaultValue={userData?.area}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter City"
                  defaultValue={userData?.city}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
                />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Google Map Iframe
            </label>
            <input
              type="text"
              name="iframe"
              placeholder="Map Link: G.Maps > Embed a map > Copy HTML"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
              defaultValue={userData?.iframe}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mx-auto text-white bg-[#444AC4] hover:bg-[#3c41a3] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default EditProfile;

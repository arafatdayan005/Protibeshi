import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as geolib from "geolib";

function ItemCads({ item }) {
  const [distance, setDistance] = useState("");
  const { _id, name, description, photos, caution, latitude, longitude } = item;

  useEffect(() => {
    const userLati = JSON.parse(localStorage.getItem("Location"))?.latitude;
    const userLong = JSON.parse(localStorage.getItem("Location"))?.longitude;
    if (latitude && longitude && userLati && userLong) {
      const distance = geolib.getDistance(
        { latitude: latitude, longitude: longitude },
        {
          latitude: userLati,
          longitude: userLong,
        }
      );
      setDistance(distance);
    }
  }, [latitude, longitude]);

  return (
    <div className="flex flex-col justify-center bg-white shadow-xl rounded-xl hover:scale-105 duration-300">
      <Link to={`/details/${_id}`}>
        <div className="p-5 overflow-hidden">
          <img
            className="object-cover h-72 m-auto"
            src={photos}
            alt="open"
          ></img>
          <p className="font-normal text-[#00B8A8] mb-1">Available now</p>
          <p className="my-2 text-xl font-bold">{name}</p>
          <p className="mb-4">{description}</p>
          <hr></hr>
          <div className="flex justify-between mt-2">
            <div>
              <p className="font-bold text-xl">${caution}</p>
              <p className="font-light text-[#00B8A8]">Safety Money</p>
            </div>
            {distance ? (
              <div>
                <p className="font-bold text-xl">{distance}m</p>
                <p className="font-semibold text-[#444AC4] text-center">Away</p>
              </div>
            ) : (
              <div>
                <p className="font-light text-md text-center">Distance</p>
                <p className="font-semibold text-center">Unavailable</p>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ItemCads;

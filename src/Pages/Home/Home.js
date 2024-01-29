import React, { useContext, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import magnify from "./../../Images/search.svg";
import img from "./../../Images/homepage.svg";
import ItemsCards from "./ItemCards";
import { getAllItems } from "../../API/Item";
import * as geolib from "geolib";
import Swal from "sweetalert2";
import { postProfile } from "../../API/Profile";
import { AuthContext } from "../../Providers/AuthProviders";

function Home() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [seeAll, setSeeAll] = useState(false);
  const [search, setSearch] = useState("");
  const [isShowing, setIsShowing] = useState(false);
  const [location, setLocation] = useState("");
  const wrapperRef = useRef(null);
  const [userData, setUserData] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    if (user && user.email !== "admin@protybeshi.com") {
      fetch(`http://localhost:5000/users/${user?.email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserData(data);

          if (!data.latitude && !data.longitude) {
            setTimeout(() => setIsShowing(true), 10000);
          }
        });
    }
  }, [user]);

  useEffect(() => {
    getAllItems().then((data) => {
      const userLati = JSON.parse(localStorage.getItem("Location"))?.latitude;
      const userLong = JSON.parse(localStorage.getItem("Location"))?.longitude;

      const result = data
        .filter((item) => item?.status === "Available")
        .map((item) => {
          let distance;
          if (item.latitude && item.longitude && userLati && userLong) {
            distance = geolib.getDistance(
              { latitude: item.latitude, longitude: item.longitude },
              { latitude: userLati, longitude: userLong }
            );
          }
          return { ...item, distance };
        })
        .sort((a, b) => a.distance - b.distance);
      setData(result);
    });
  }, [user, isShowing]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";

        const focusableElements =
          'button, [href], input, select, textarea, [tabIndex]:not([tabIndex="-1"])';

        const modal = document.querySelector("#modal");

        const firstFocusableElement =
          modal.querySelectorAll(focusableElements)[0];

        const focusableContent = modal.querySelectorAll(focusableElements);

        const lastFocusableElement =
          focusableContent[focusableContent.length - 1];

        document.addEventListener("keydown", function (e) {
          if (e.keyCode === 27) {
            setIsShowing(false);
          }

          let isTabPressed = e.key === "Tab" || e.keyCode === 9;

          if (!isTabPressed) {
            return;
          }

          if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
              lastFocusableElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastFocusableElement) {
              firstFocusableElement.focus();
              e.preventDefault();
            }
          }
        });

        firstFocusableElement.focus();
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing, userData]);

  const handleLocation = () => {
    const coordinatesArray = location.split(", ");

    const latitude = coordinatesArray[0];
    const longitude = coordinatesArray[1];

    const validLocation = geolib.isValidCoordinate({
      latitude: latitude,
      longitude: longitude,
    });

    if (validLocation) {
      postProfile(user.email, {
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      });
      localStorage.setItem(
        "Location",
        JSON.stringify({
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
        })
      );
      setTimeout(() => {
        setReload(!reload);
      }, 500);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your coordinate has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Not a valid coordinate",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <section>
        <div className="flex justify-between items-center max-w-[85%] mx-auto">
          <div className="ml-8">
            <p className="text-6xl font-medium text-black">
              <span>
                Why buy when <br></br> you can
              </span>
              <span className="text-[#2cb6a9]"> borrow</span>?
            </p>
            <div className="relative border border-[#e1e2e4] rounded-full mt-8 flex items-center justify-around overflow-hidden">
              <img className="object-cover" src={magnify} alt="search"></img>
              <input
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                className="outline-none text-xl -ml-4 mr-8"
                type="textbox"
                placeholder="Bikes, Drones, Cameras"
              ></input>
              <button className="bg-[#4E3CB8] rounded-full text-white font-semibold py-3 px-6">
                Search
              </button>
            </div>
          </div>
          <div>
            <img src={img} alt="none"></img>
          </div>
        </div>
      </section>
      <section className="bg-[#F4F5F6] pt-12">
        <div className="max-w-[85%] mx-auto">
          <div>
            <p className="font-bold text-[48px] mb-12 text-center">
              Recently Added
            </p>
          </div>
          <div className="grid w-full grid-cols-4 gap-8 justify-center items-center bg-[#F4F5F6]">
            {data
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search);
              })
              .slice(0, seeAll ? 20 : 8)
              .map((item) => (
                <ItemsCards key={item._id} item={item}></ItemsCards>
              ))}
          </div>
          <div className="w-full flex justify-center">
            <button
              onClick={() => setSeeAll(true)}
              className="my-16 mx-auto bg-[#4E3CB8] rounded-xl px-6 py-3 text-white font-semibold"
            >
              More
            </button>
          </div>
        </div>
      </section>
      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-black/30 backdrop-blur-sm"
              aria-labelledby="header-3a content-3a"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              {/*    <!-- Modal --> */}
              <div
                ref={wrapperRef}
                className="flex max-h-[90vh] w-11/12 max-w-xl flex-col gap-6 overflow-hidden rounded-xl bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                id="modal"
                role="document"
              >
                {/*        <!-- Modal header --> */}
                <header id="header-3a" className="flex items-center gap-4">
                  <h3 className="flex-1 text-2xl font-semibold text-center -mr-16 text-slate-700">
                    Share Your Geo-Location
                  </h3>
                  <button
                    onClick={() => setIsShowing(false)}
                    className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide text-[#444AC4] transition duration-300 hover:bg-[#444ac444] hover:text-[#444AC4] focus:bg-blue-200 focus:text-blue-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-blue-300 disabled:shadow-none disabled:hover:bg-transparent"
                    aria-label="close dialog"
                  >
                    <span className="relative only:-mx-5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        role="graphics-symbol"
                        aria-labelledby="title-79 desc-79"
                      >
                        <title id="title-79">Icon title</title>
                        <desc id="desc-79">
                          A more detailed description of the icon
                        </desc>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </header>
                {/*        <!-- Modal body --> */}
                <div id="content-3a" className="flex-1 overflow-auto">
                  <p className="text-xl">
                    To get intelligent item gallary according to your precise
                    location we need your geo-location coordinate (basically
                    latitude & longitude). Simply go to google maps, mark the
                    location of your place, right-click the marker and copy the
                    coordinate.{" "}
                    <span className="text-blue-400">
                      (
                      <a
                        href="https://youtu.be/zo2YYJxAwIc"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sample tutorial
                      </a>
                      )
                    </span>
                  </p>

                  <input
                    onChange={(e) => setLocation(e.target.value)}
                    type="text"
                    name="location"
                    placeholder="e.g: 23.79855776140301, 90.44970062432282"
                    className="mt-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
                  />

                  <div className="flex justify-center mt-4">
                    <button
                      onClick={handleLocation}
                      className="mx-auto text-white bg-[#444AC4] hover:bg-[#3c41a3] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}

export default Home;

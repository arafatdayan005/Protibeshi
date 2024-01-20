import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { rentItem } from "../../API/Item";
import Swal from "sweetalert2";

function ItemDetails() {
  const [duration, setDuration] = useState(0);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const data = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    _id,
    caution,
    name,
    contact,
    photos,
    condition,
    description,
    map,
    userName,
    userImage,
    road,
    area,
    city,
  } = data;

  const handleRent = async () => {
    const borrow = {
      _id,
      name,
      description,
      condition,
      photos,
      caution,
      borrowEmail: user.email,
    };

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "btn bg-emerald-500 text-white rounded-lg py-4 px-5 text-lg font-semibold",
        cancelButton:
          "btn bg-red-600 text-white rounded-lg py-4 px-5 mr-8 text-lg font-semibold",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, rent it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          const res = await rentItem(_id, borrow);
          if (res) {
            swalWithBootstrapButtons.fire({
              title: "Successful!",
              text: "You rent this item successfully",
              icon: "success",
            });
            navigate("/");
          }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Item rent was not successful",
            icon: "error",
          });
        }
      });
  };

  return (
    <>
      <div className="flex gap-x-20 justify-center w-full px-[10vw] bg-white mb-16">
        <div>
          <img
            className="rounded h-[45vh] w-[25vw]"
            src={photos}
            alt="open"
          ></img>
          <div className="p-3 shadow-xl">
            <iframe
              title={_id}
              src={map}
              className="h-[43vh] w-[24vw]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div>
          <p className="text-4xl font-semibold my-8">{name}</p>
          <p className="text-2xl italic">{description}</p>
          <p className="text-2xl font-bold my-8">Lender Details:</p>
          <div className="flex flex-col justify-center items-center">
            <img className="rounded-full" src={userImage} alt=""></img>
            <p className="mt-4 text-xl font-semibold">{userName}</p>
            <p className="text-xl font-semibold">+88{contact}</p>
          </div>
          <div className="flex justify-center mt-8 gap-x-40 mr-4">
            <div>
              <p className="text-xl font-bold underline text-center">Area:</p>
              <p className="text-xl font-semibold text-center">{area}</p>
            </div>
            <div>
              <p className="text-xl font-bold underline text-center">Road:</p>
              <p className="text-xl font-semibold text-center">{road}</p>
            </div>
            <div>
              <p className="text-xl font-bold underline text-center">City:</p>
              <p className="text-xl font-semibold text-center">{city}</p>
            </div>
          </div>
          <p className="text-2xl font-bold my-8">Rent Details:</p>
          <div className="flex flex-col justify-center items-center">
            <p className="text-xl font-semibold">Select Duration</p>
            <div className="flex gap-8 my-8">
              <button
                className="bg-[#4E3CB8] text-white rounded-full py-4 px-6 text-md font-bold"
                disabled={duration === 0 ? true : false}
                onClick={() => setDuration(duration - 1)}
              >
                -
              </button>
              <p className="text-xl font-semibold text-center">
                {duration} <br />
                Days
              </p>
              <button
                className="bg-[#4E3CB8] text-white rounded-full py-3 px-[22px] text-md font-bold"
                onClick={() => setDuration(duration + 1)}
              >
                +
              </button>
            </div>
            <button
              className="bg-[#4E3CB8] text-white rounded-full py-4 px-6 text-md font-semibold"
              onClick={handleRent}
            >
              Rent for {caution}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetails;

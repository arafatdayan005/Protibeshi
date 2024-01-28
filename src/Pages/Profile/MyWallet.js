import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { postProfile } from "../../API/Profile";

function MyWallet() {
  const { user } = useContext(AuthContext);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [user]);

  const handlePay = (e) => {
    e.preventDefault();
    const form = e.target;
    const cash = form.cash.value;

    const data = {
      name: userData.name,
      email: userData.email,
      area: userData.area,
      phone: userData.phone,
      cash: parseInt(cash),
    };

    postProfile(userData.email, { credit: userData.credit + parseInt(cash) });

    fetch(`http://localhost:5000/recharge`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => window.location.replace(data.url));
  };
  return (
    <>
      <p className="text-center font-bold text-5xl tracking-tight font-serif dark:text-white">
        My Wallet
      </p>

      <div className="w-[40%] mx-auto border shadow-lg p-10 mt-8 rounded-2xl">
        <p className="text-center font-bold text-2xl tracking-tight mb-4">
          Recharge Form
        </p>
        <hr />
        <p className="mt-4 text-lg font-semibold">Name: {userData.name}</p>
        <p className="text-lg font-semibold">
          Address: {userData.area}, {userData.city}
        </p>
        <p className="text-lg font-semibold"></p>
        <p className="text-lg font-semibold">Number: {userData.phone}</p>
        <p className="text-lg font-semibold">Email: {userData.email}</p>
        <form onSubmit={handlePay}>
          <label className="block mb-2 text-sm font-medium mt-4">
            Payment Method
          </label>
          <select
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
            name="gender"
          >
            <option selected defaultValue>
              Choose your payment method
            </option>
            <option value="bkash">Bkash</option>
            <option value="Nagad">Nagad</option>
            <option value="Rocket">Rocket</option>
            <option value="Upay">Upay</option>
          </select>
          <label className="block mb-2 text-sm font-medium mt-4">
            Recharge Amount
          </label>
          <input
            type="number"
            name="cash"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#444AC4] focus:border-[#444AC4] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#444AC4] dark:focus:border-[#444AC4]"
          />
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="mx-auto text-white bg-[#444AC4] hover:bg-[#3c41a3] font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5"
            >
              Pay
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MyWallet;

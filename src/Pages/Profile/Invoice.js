import React from "react";

function Invoice() {
  return (
    <>
      <div className="p-4 sm:p-7 overflow-y-auto">
        <div className="text-center">
          <h3 className="text-center font-bold text-5xl tracking-tight font-serif dark:text-white">
            Invoice From Potybeshi
          </h3>
          <p className="text-sm text-gray-500 mb-24">Invoice #3682303</p>
        </div>

        <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
          <div>
            <span className="block text-xs uppercase text-gray-500">
              Amount paid:
            </span>
            <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
              $500
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase text-gray-500">
              Date paid:
            </span>
            <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
              April 22, 2020
            </span>
          </div>

          <div>
            <span className="block text-xs uppercase text-gray-500">
              Payment method:
            </span>
            <div className="flex items-center gap-x-2">
              <img
                className="w-6 h-6"
                src="https://freelogopng.com/images/all_img/1656235223bkash-logo.png"
                alt=""
              />
              <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                •••• 4242
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-10">
          <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">
            Summary
          </h4>

          <ul className="mt-3 flex flex-col">
            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
              <div className="flex items-center justify-between w-full">
                <span>Recharge Fee</span>
                <span>$500.00</span>
              </div>
            </li>

            <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
              <div className="flex items-center justify-between w-full">
                <span>Amount paid</span>
                <span>$500.00</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="mt-5 flex justify-end gap-x-2">
          <p
            className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            href="#"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" x2="12" y1="15" y2="3" />
            </svg>
            Invoice PDF
          </p>
          <p
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="6 9 6 2 18 2 18 9" />
              <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
              <rect width="12" height="8" x="6" y="14" />
            </svg>
            Print
          </p>
        </div>

        <div className="mt-5 sm:mt-10">
          <p className="text-sm text-gray-500">
            If you have any questions, please contact us at{" "}
            <p
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              href="#"
            >
              example@site.com
            </p>{" "}
            or call at{" "}
            <a
              className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
              href="tel:+1898345492"
            >
              +1 898-34-5492
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Invoice;

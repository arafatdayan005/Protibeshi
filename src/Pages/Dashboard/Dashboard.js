import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="ps-64 min-h-screen dark:bg-gray-900">
        <Outlet></Outlet>
      </div>
    </>
  );
}

export default Dashboard;

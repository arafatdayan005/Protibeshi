import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AuthProvider from "./Providers/AuthProviders";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Additem from "./Pages/Add Item/Additem";
import PrivateRoute from "./Routes/PrivateRoute";
import ItemDetails from "./Pages/Item Details/ItemDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AllUsers from "./Pages/Dashboard/Admin/AllUsers";
import AllPosts from "./Pages/Dashboard/Admin/AllPosts";
import MyStuff from "./Pages/Dashboard/User/MyStuff";
import MyBorrowings from "./Pages/Dashboard/User/MyBorrowings";
import MyLendings from "./Pages/Dashboard/User/MyLendings";
import Profile from "./Pages/Profile/Profile";
import MyProfile from "./Pages/Profile/MyProfile";
import EditProfile from "./Pages/Profile/EditProfile";
import MyWallet from "./Pages/Profile/MyWallet";
import Invoice from "./Pages/Profile/Invoice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/additem",
        element: (
          <PrivateRoute>
            <Additem></Additem>
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:id",
        element: <ItemDetails></ItemDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/item/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/profile",
            element: (
              <PrivateRoute>
                <MyProfile></MyProfile>
              </PrivateRoute>
            ),
          },
          {
            path: "/profile/myprofile",
            element: (
              <PrivateRoute>
                <MyProfile></MyProfile>
              </PrivateRoute>
            ),
          },
          {
            path: "/profile/edit",
            element: (
              <PrivateRoute>
                <EditProfile></EditProfile>
              </PrivateRoute>
            ),
          },
          {
            path: "/profile/wallet",
            element: (
              <PrivateRoute>
                <MyWallet></MyWallet>
              </PrivateRoute>
            ),
          },
          {
            path: "/profile/invoice",
            element: (
              <PrivateRoute>
                <Invoice></Invoice>
              </PrivateRoute>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <MyStuff></MyStuff>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/allusers",
        element: (
          <PrivateRoute>
            <AllUsers></AllUsers>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/admin/allposts",
        element: (
          <PrivateRoute>
            <AllPosts></AllPosts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/mystuff",
        element: (
          <PrivateRoute>
            <MyStuff></MyStuff>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/myborrowings",
        element: (
          <PrivateRoute>
            <MyBorrowings></MyBorrowings>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/user/mylendings",
        element: (
          <PrivateRoute>
            <MyLendings></MyLendings>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

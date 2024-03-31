import {createBrowserRouter, } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children: [
        {
          path: "/",
          element:<Home></Home> 
        },
        {
          path:'/donation',
          element:<h1>donation</h1>
        },
        {
          path:'/statistics',
          element:<h1>statistics</h1> 
        }
      ],
    },
  ]);
  export default router
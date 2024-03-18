import React from 'react'

import Home from './Pages/Home';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <div><LoginPage></LoginPage></div>,
  }, 
   {
    path: "/signup",
    element: <div><SignUpPage></SignUpPage></div>,
  },
   
]);

export default function App() {
  return (
    <div>
        <RouterProvider router={router} />
      
    </div>
  )
}

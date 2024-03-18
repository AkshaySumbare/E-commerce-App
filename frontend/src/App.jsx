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
import CartPage from './Pages/CartPage';

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
  {
    path: "/cart",
    element: <div><CartPage></CartPage></div>,
  },
   
]);

export default function App() {
  return (
    <div>
        <RouterProvider router={router} />
      
    </div>
  )
}

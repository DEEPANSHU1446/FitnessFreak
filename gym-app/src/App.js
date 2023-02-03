import React from "react";
import "./style.scss"
import {createBrowserRouter,Outlet,RouterProvider}from"react-router-dom"
import NavBar from "./pages/NavBar"
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Gym from "./pages/Gym";

function Layout() {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

const router = createBrowserRouter([
  { path: "/",
   element : <Layout/>,
        children: [{
          path: "/", element: <Home />},
       { path:"/login", element: <Login/>},
       { path:"/register", element: <Register/>},
       { path:"/gym", element: <Gym/>}
      ],}

          
  
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;

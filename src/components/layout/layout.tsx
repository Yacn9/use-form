import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "components/navbar";
import "./layout.module.css";

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

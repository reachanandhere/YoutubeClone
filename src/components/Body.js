import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import HiddenSidebar from "./HiddenSidebar";

const Body = () => {
  const showMenu = useSelector((store) => store?.app?.isMenuOpen);

  return (
    <section className="flex">
      {showMenu ? <Sidebar /> : <HiddenSidebar />}
      <Outlet />
    </section>
  );
};

export default Body;

import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation min-h-screen h-800 p-3 bg-orange-100 w-24">
      <div className="text-1xl font-bold mb-10">
        <NavLink to="/" className="text-lg text-black">
          Admin Panel
        </NavLink>
      </div>
      <NavLink to="/" className=" text-lg text-black">
        Проекти
      </NavLink>
      <br />
      <br />
      <br />
      <NavLink to="/reports" className=" text-lg text-black">
        Звіти
      </NavLink>
    </div>
  );
}

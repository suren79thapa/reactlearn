import React from "react";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="bg-black text-white p-3 ">
      <h1 className="text-2xl">Redux Toolkit</h1>
      <nav>
        <NavLink to={"/counter-list"}>counterlist</NavLink>
      </nav>
    </div>
  );
}

export default Header;

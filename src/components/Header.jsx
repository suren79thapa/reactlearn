import React from "react";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="bg-black text-white p-3 flex items-baseline justify-between">
      <h1 className="text-2xl">Redux Toolkit</h1>
      <nav className="space-x-7">
        <NavLink to={"/add-article"}>Create Article</NavLink>
        <NavLink to={"/cocktailcat"}> cocktail-category</NavLink>
      </nav>
    </div>
  );
}

export default Header;

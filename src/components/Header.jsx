import React from "react";
import { Link, NavLink } from "react-router";
function Header() {
  return (
    <div className="bg-black text-white p-3 flex items-baseline justify-between">
      <Link to="/">
        <h1 className="text-2xl font-bold text-blue-600 hover:underline cursor-pointer">
          Redux Toolkit
        </h1>
      </Link>
      <nav className="space-x-7">
        <NavLink to={"/add-article"}>Create Article</NavLink>
        <NavLink to={"/cocktailcat"}> cocktail-category</NavLink>
      </nav>
    </div>
  );
}

export default Header;

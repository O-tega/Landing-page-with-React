import React, { useState } from "react";
import Search from "../components/searchComponent";
import { Link } from "react-router-dom";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

const navItems = [
  {
    id: 1,
    name: "home",
    link: "/",
  },
  {
    id: 2,
    name: "about",
    link: "about",
  },
  {
    id: 3,
    name: "pages",
    link: "pages",
  },
  {
    id: 4,
    name: "services",
    link: "services",
  },
  {
    id: 5,
    name: "portfolio",
    link: "portfolio",
  },
  {
    id: 6,
    name: "blog",
    link: "blog",
  },
  {
    id: 7,
    name: "contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="pt-5 lg:mx-28 relative">
      <nav className="mx-3 flex justify-between items-center mb-5 md:mx-12 md:mb-0">
        <Link to="/" className="font-bold text-white text-2xl">
          LOGO.
        </Link>
        <div className="pr-8 lg:block hidden">
          {navItems.map((item) => {
            return (
              <Link to={item.link} className="text-white p-4">
                {item.name}
              </Link>
            );
          })}
        </div>
        <Search
          newclass="rounded-full bg-white lg:w-48 md:w-50 flex items-center justify-around relative"
          classname=" border-none rounded-full py-2 px-3 text-blue-700 leading-tight focus:outline-none focus:shadow-outline w-full"
          id="username"
          spanClass="absolute right-0 mr-3"
          type="text"
          placeholder="search"
          content={
            <Link to="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </Link>
          }
        />
        <div className="lg:hidden">
          {showMenu ? (
            <XIcon
              onClick={() => setShowMenu(false)}
              className="w-10 h-10 text-white"
            />
          ) : (
            <MenuIcon
              onClick={() => setShowMenu(true)}
              className="w-10 h-10 text-white"
            />
          )}
        </div>
      </nav>
      <div className="w-full absolute lg:hidden">
        <nav
          className={`bg-white mx-2 rounded transition duration-500 ease-in-out ${
            showMenu
              ? "transform translate-y-0"
              : "transform -translate-y-full hidden"
          }`}
        >
          {navItems.map((item) => {
            return (
              <Link
                to={item.link}
                className="block text-left capitalize p-4 active:scale-50 "
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

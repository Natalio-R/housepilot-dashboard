import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { HiOutlineCog6Tooth, HiCubeTransparent } from "react-icons/hi2";
import { MdOutlineContentCopy } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-96 min-h-screen bg-white shadow-xl">
      <Link to="/" className="w-full flex items-center justify-center p-6 pb-0">
        <img className="w-40 cursor-pointer" src={logo} alt="" />
      </Link>
      <ul className="flex flex-col gap-4 justify-center h-full">
        <Link
          to="/"
          className="transition py-4 ps-6 w-full bg-gray-200 border-r-8 border-black cursor-pointer"
        >
          <li className="w-full text-3xl font-semibold">Home</li>
        </Link>
        <Link
          to="/scenes"
          className="transition py-4 ps-6 w-full hover:bg-gray-200 cursor-pointer text-gray-400 hover:text-black"
        >
          <li className="text-2xl font-medium flex items-center gap-2">
            <MdOutlineContentCopy className="text-3xl" />
            Scenes
          </li>
        </Link>
        <Link
          to="/smart"
          className="transition py-4 ps-6 w-full hover:bg-gray-200 cursor-pointer text-gray-400 hover:text-black"
        >
          <li className="text-2xl font-medium flex items-center gap-2">
            <HiCubeTransparent className="text-3xl" />
            Smart
          </li>
        </Link>
        <Link
          to="/settings"
          className="transition py-4 ps-6 w-full hover:bg-gray-200 cursor-pointer text-gray-400 hover:text-black"
        >
          <li className="text-2xl font-medium flex items-center gap-2">
            <HiOutlineCog6Tooth className="text-3xl" />
            Settings
          </li>
        </Link>
      </ul>
      <div className="text-center py-4 text-md font-medium cursor-default">
        &copy;2023 Home Pilot <br /> All rights reserved
      </div>
    </div>
  );
};

export default Sidebar;

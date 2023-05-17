import React, { useEffect, useState } from "react";
import { BiBell } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const HeaderMenu = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const formattedDate = currentDateTime.toLocaleDateString("en-EN", options);

  const userName = "Alexa";
  const userAvatar =
    "https://www.getillustrations.com/photos/pack/video/55895-3D-AVATAR-ANIMATION.gif";
  const houseName = "CasaRabNav";

  window.addEventListener("load", function (event) {
    document.querySelector('[data-dropdown-toggle="dropdown"]').click();
  });

  return (
    <div className="p-6 flex items-center justify-between w-full">
      <div className="flex flex-col items-start">
        <p className="text-2xl font-medium">
          Good morning <span className="font-semibold">{userName}</span>
        </p>
        <p className="text-xl font-medium">
          Welcome to <span className="italic">{houseName}</span>
        </p>
      </div>
      <div className="flex items-center justify-center gap-4">
        <p className="text-2xl font-bold leading-none">
          {currentDateTime.toLocaleTimeString()}
        </p>
        <p className="text-xl font-medium leading-none">{formattedDate}</p>
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="flex items-center justify-end">
          <FiSearch className="transition p-2 w-12 h-12 text-gray-500 hover:text-black hover:bg-gray-300 rounded-full cursor-pointer" />
          <div className="relative transition p-2 w-12 h-12 text-gray-500 hover:text-black hover:bg-gray-300 rounded-full cursor-pointer">
            <BiBell className="w-full h-full" />
            <span className="h-3 w-3 rounded-full bg-red-600 animate-bounce absolute top-1 right-2"></span>
          </div>
        </div>
        <div>
          <img
            id="dropdownDefault"
            data-dropdown-toggle="dropdown"
            src={userAvatar}
            alt="User avatar"
            className="rounded-full w-16 h-16 shadow-xl cursor-pointer"
          />
          <div
            id="dropdown"
            className="z-10 w-56 p-3 bg-white rounded-lg shadow !-ml-6"
          >
            <a
              href="/login"
              className="block text-md text-white font-medium bg-black py-3 w-full text-center rounded-md hover:text-black hover:bg-white border-2 border-black transition"
            >
              Log In
            </a>
            <a
              href="/register"
              className="block mt-2 text-md text-black font-medium bg-gray-300 py-3 w-full text-center rounded-md hover:bg-gray-400 transition"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;

import React from "react";
import headerLogo from "../../assets/images/mentoriplogo.png";
import logoImage from "../../assets/images/logoimage.png";
import { IoMdNotificationsOutline } from "react-icons/io";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm px-4 sm:px-6 py-3">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start w-full sm:w-auto">
          <img
            className="w-40 sm:w-52 md:w-60 h-auto object-contain"
            src={headerLogo}
            alt="Header Logo"
          />
        </div>

        {/* Right Side - Notifications & User Info */}
        <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
          {/* Notification Icon */}
          <button className="relative">
            <IoMdNotificationsOutline className="text-3xl sm:text-4xl text-red-800 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition" />
            {/* Optional Notification Dot */}
            <span className="absolute top-1 right-1 block w-2.5 h-2.5 bg-red-600 rounded-full"></span>
          </button>

          {/* User Image */}
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            src={logoImage}
            alt="User"
          />

          {/* Username */}
          <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
            Marvin McKinney
          </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;

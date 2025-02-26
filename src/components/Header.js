"use client";

import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import Image from "next/image";

const Header = ({ header }) => {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-md text-black">
      {/* Title */}
      <h1 className="text-2xl font-bold">{header}</h1>

      {/* Icons and Search Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div
          className="flex items-center bg-[#F5F7FA] rounded-full px-4 py-2"
          role="search"
          aria-label="Search"
        >
          <FiSearch className="text-gray-500 mr-2" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search for something"
            aria-label="Search input"
            className="bg-transparent outline-none text-sm text-black"
          />
        </div>

        {/* Icons */}
        <div
          className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer hover:text-black"
          role="button"
          aria-label="Notifications"
          tabIndex="0"
        >
          <FiBell className="text-xl text-gray-600" aria-hidden="true" />
        </div>
        <div
          className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer hover:text-black"
          role="button"
          aria-label="Settings"
          tabIndex="0"
        >
          <FiSettings className="text-xl text-gray-600" aria-hidden="true" />
        </div>
        <div
          className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden"
          aria-label="User profile"
        >
          <Image
            src="/profile.jpg" // Replace with dynamic profile image if needed
            alt="User Profile Picture"
            width={40}
            height={40}
            className="object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

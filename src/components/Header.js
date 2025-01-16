"use client";

import { FiSearch, FiSettings, FiBell } from "react-icons/fi";
import Image from "next/image";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4 bg-white  text-black">
      {/* Title */}
      <h1 className="text-2xl">Overview</h1>

      {/* Icons and Search Section */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center bg-[#F5F7FA] rounded-full px-4 py-2">
          <FiSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent outline-none text-sm text-black"
          />
        </div>

        {/* Icons */}
        <div className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer hover:text-black">
          <FiBell className="text-xl text-gray-600" />
        </div>
        <div className="w-10 h-10 bg-[#F5F7FA] rounded-full flex items-center justify-center cursor-pointer hover:text-black">
          <FiSettings className="text-xl text-gray-600" />
        </div>
        <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
          <Image
            src="/profile.jpg" // Replace with dynamic profile image if needed
            alt="Profile"
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

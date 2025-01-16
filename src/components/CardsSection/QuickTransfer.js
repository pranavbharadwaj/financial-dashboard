"use client";

import { useState } from "react";
import { gsap } from "gsap";

const QuickTransfer = () => {
  const profiles = [
    { id: 1, name: "Alice", icon: "👩" },
    { id: 2, name: "Bob", icon: "👨" },
    { id: 3, name: "Charlie", icon: "🧑" },
  ];

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleProfileClick = (name) => {
    setSelectedProfile(name);
    gsap.fromTo(
      ".quick-transfer-input",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    );
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Profiles Section */}
      <div className="flex space-x-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            onClick={() => handleProfileClick(profile.name)}
            className={`flex flex-col items-center space-y-2 cursor-pointer ${
              selectedProfile === profile.name ? "font-bold text-blue-500" : ""
            }`}
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-3xl">
              {profile.icon}
            </div>
            <p className="text-sm font-medium text-gray-700">{profile.name}</p>
          </div>
        ))}
      </div>

      {/* Input and Send Button Section */}
      {selectedProfile && (
        <div className="flex items-center w-full justify-center space-x-2 quick-transfer-input">
          <input
            type="number"
            placeholder={`Send to ${selectedProfile}`}
            className="w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            Send
            <span className="ml-2">📤</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickTransfer;

"use client";

import {
  FiHome,
  FiCreditCard,
  FiSettings,
  FiDollarSign,
  FiBarChart2,
  FiBriefcase,
  FiBookOpen,
  FiStar,
  FiClipboard,
  FiCheckSquare,
} from "react-icons/fi";
import { usePathname } from "next/navigation";

const Sidebar = ({ width }) => {
  const pathname = usePathname();

  const menuOptions = [
    { name: "Dashboard", path: "/", icon: FiHome },
    { name: "Transactions", path: "/transactions", icon: FiClipboard },
    { name: "Accounts", path: "/accounts", icon: FiDollarSign },
    { name: "Investment", path: "/investment", icon: FiBarChart2 },
    { name: "Credit Cards", path: "/credit-cards", icon: FiCreditCard },
    { name: "Loans", path: "/loans", icon: FiBriefcase },
    { name: "Services", path: "/services", icon: FiBookOpen },
    { name: "My Privileges", path: "/privileges", icon: FiStar },
    { name: "Settings", path: "/settings", icon: FiSettings },
  ];

  return (
    <div
      className={"h-full bg-white text-black flex flex-col " + width}
      aria-label="Sidebar navigation"
    >
      <div className="flex items-center justify-center gap-2 h-16">
        <FiCheckSquare className="text-2xl" aria-hidden="true" />
        <h1 className="text-xl font-bold" aria-label="SOAR TASK">
          SOAR TASK
        </h1>
      </div>
      <nav className="flex flex-col" aria-label="Main navigation">
        {menuOptions.map(({ name, path, icon: Icon }) => (
          <a
            key={name}
            href={path}
            className={`flex items-center gap-2 px-4 py-3 mb-2 w-full text-left transition-all duration-200 ${
              pathname === path
                ? "border-l-4 border-black font-bold"
                : "hover:bg-gray-100"
            }`}
            aria-current={pathname === path ? "page" : undefined}
            aria-label={name}
          >
            <Icon aria-hidden="true" />
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;

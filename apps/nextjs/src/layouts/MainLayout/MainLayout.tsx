"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-full bg-gray-100">
      <div className="flex w-full flex-col">
        {pathname === "/ai/chat" && (
          <div
            className={`${
              isSidebarOpen ? "ml-64" : "ml-16"
            } w-full transition-all duration-300 ease-in-out`}
          >
            <Topbar />
          </div>
        )}
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div
            className={`${
              isSidebarOpen ? "ml-64" : "ml-16"
            } w-full transition-all duration-300 ease-in-out h-screen`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

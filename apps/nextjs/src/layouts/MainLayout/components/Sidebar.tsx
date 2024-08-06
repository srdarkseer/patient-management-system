"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSetting,
} from "react-icons/ai";
import { FiHome } from "react-icons/fi";
import { LuClipboardList, LuLogOut } from "react-icons/lu";
import { PiUsersLight } from "react-icons/pi";

import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const pathname = usePathname();

  const handleSignOut = () => {
    sessionStorage.clear();
  };

  const menuItems = [
    { href: "/", icon: FiHome, label: "Home" },
    { href: "/patients", icon: PiUsersLight, label: "Patients" },
    { href: "/history", icon: LuClipboardList, label: "History" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 transform bg-white shadow-md ${
        isOpen ? "w-64" : "w-16"
      } z-10 transition-all duration-300 ease-in-out`}
    >
      <div className="flex items-center justify-between border-b p-4">
        {isOpen && <span className="text-xl font-bold">Kochanet</span>}
        <Button
          onClick={toggleSidebar}
          variant="ghost"
          size="icon"
          className="p-3"
        >
          {isOpen ? (
            <AiOutlineClose className="h-5 w-5" />
          ) : (
            <AiOutlineMenu className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className={`flex-1 ${isOpen ? "flex-col" : "justify-center"}`}>
        {menuItems.map(({ href, icon: Icon, label }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex py-4 ${
                isOpen ? "justify-start pl-4" : "justify-center"
              } w-full items-center transition duration-300 hover:bg-gray-200 focus:outline-none ${
                isActive ? "bg-gray-100 text-orange-700" : ""
              }`}
            >
              <Icon
                className={`text-gray-600 ${isActive ? "text-orange-700" : ""}`}
              />
              {isOpen && (
                <span
                  className={`pl-2 text-sm font-medium ${isActive ? "text-orange-700" : "text-gray-800"}`}
                >
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      <div className="absolute bottom-4 flex w-full flex-col gap-10">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={`flex w-full ${
                isOpen ? "justify-between" : "justify-center"
              } cursor-pointer items-center px-4 py-2 transition duration-300 hover:bg-gray-200`}
            >
              <div className="flex items-center space-x-2">
                <img
                  src="https://github.com/shadcn.png"
                  alt="User Avatar"
                  className={`w-10 rounded-full ${isOpen ? "h-10" : "h-8"}`}
                />
                {isOpen && (
                  <span className="text-sm font-medium text-gray-800">
                    srdarkseer
                  </span>
                )}
              </div>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/settings" className="dropdown-link">
                <div className="flex w-full items-center gap-4">
                  <AiOutlineSetting /> Settings
                </div>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSignOut}>
              <div className="flex w-full items-center gap-4">
                <LuLogOut /> Log out
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/state";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const { isSidebarCollapsed, isDarkMode } = useAppSelector((state) => state.global);

  return (
    <header className="flex items-center justify-between bg-white px-4 py-3 dark:bg-black">
      <div className="flex items-center gap-8">
        {isSidebarCollapsed && (
          <button onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}>
            <Menu className="h-8 w-8 dark:text-white" />
          </button>
        )}

        <div className="relative flex h-min w-[200px]">
          <Search className="absolute left-[4px] top-1/2 -translate-y-1/2 mr-2 h-5 w-5 cursor-pointer dark:text-white" />

          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button
          onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
          className={twMerge(
            "rounded p-2",
            isDarkMode
              ? "dark:hover:bg-gray-700"
              : "hover:bg-gray-100",
          )}
        >
          {isDarkMode ? (
            <Sun className="h-6 w-6 cursor-pointer dark:text-white" />
          ) : (
            <Moon className="h-6 w-6 cursor-pointer dark:text-white" />
          )}
        </button>

        <Link
          href={"/settings"}
          className={twMerge(
            "h-min w-min rounded p-2",
            isDarkMode
              ? "dark:hover:bg-gray-700"
              : "hover:bg-gray-100",
          )}
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>

        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"></div>
      </div>
    </header>
  );
}

export default Navbar;
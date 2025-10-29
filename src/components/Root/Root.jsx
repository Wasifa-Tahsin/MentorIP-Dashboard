import React, { useState } from "react";
import { Outlet } from "react-router";
import Slidebar from "../pages/Slidebar";
import Header from "../page/Header";
import { IoClose } from "react-icons/io5";

const Root = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to close sidebar (can be passed to menu items)
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar for Desktop */}
        <div className="hidden lg:block w-64 bg-white border-r shadow-sm">
          <Slidebar />
        </div>

        {/* Sidebar for Mobile */}
        <div
          className={`fixed inset-0 z-40 transition-opacity duration-300 ${
            isSidebarOpen ? "visible opacity-100" : "invisible opacity-0"
          } lg:hidden`}
          onClick={handleCloseSidebar} // Close when clicking outside
        >
          <div
            className={`absolute top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 flex flex-col`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseSidebar}
                className="text-red-800 p-2 rounded-md hover:bg-gray-100 transition"
              >
                <IoClose size={26} />
              </button>
            </div>

            {/* Sidebar Menu */}
            {/* Pass handleCloseSidebar to menu items so clicking closes sidebar */}
            <Slidebar onMenuItemClick={handleCloseSidebar} />
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Root;

import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
    document.body.style.overflow = isSidebarOpen ? "auto" : "hidden"; // Disable body scroll when sidebar is open
  };

  return (
    <div className="container mx-auto px-4 py-2 relative">
      <nav className="flex items-center justify-between">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <img
            src="/Apple_logo_grey.svg.png"
            alt="Apple Logo"
            className="w-5 object-contain filter invert align-middle"
          />
        </div>

        {/* Navigation Links for Large Screens */}
        <ul className="hidden lg:flex space-x-6 text-gray-700 text-sm font-small items-center">
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "Vision",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase().replace(" & ", "").replace(" ", "")}`}
                className="hover:text-black cursor-pointer"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-4">
          <div className="search-icon cursor-pointer text-gray-700 hover:text-black">
            <FaSearch size={16} />
          </div>
          <div className="bag-icon cursor-pointer text-gray-700 hover:text-black">
            <FaShoppingCart size={18} />
          </div>
          {/* Sidebar Toggle Button */}
          <div
            className="menu-icon cursor-pointer text-gray-700 hover:text-black lg:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </div>
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 p-6 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isSidebarOpen}
      >
        <ul className="space-y-4 text-gray-700 text-sm font-small">
          {[
            "Store",
            "Mac",
            "iPad",
            "iPhone",
            "Watch",
            "Vision",
            "AirPods",
            "TV & Home",
            "Entertainment",
            "Accessories",
            "Support",
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={`/${item.toLowerCase().replace(" & ", "").replace(" ", "")}`}
                className="hover:text-black cursor-pointer"
                onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay to close sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Navbar;

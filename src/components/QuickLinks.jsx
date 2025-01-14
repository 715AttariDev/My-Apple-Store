import React from "react";

const QuickLinks = () => {
  // Array of link names
  const links = ["Order Status", "Shopping Help", "Return", "Your Saves"];

  return (
    <div className="container mx-auto p-4">
      <h3 className="text-base font-bold mb-4">Quick Links</h3>
      <div className="link-items">
        <ul className="flex space-x-4">
          {links.map((link, index) => (
            <li key={index}>
              <button className="flex items-center text-black text-xs font-normal border border-black rounded-3xl hover:bg-black hover:text-white transition-colors duration-300 px-6 py-2">
                {link}
                <span className="ml-2">&#8599;</span> {/* Adjusted spacing */}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuickLinks;

import React from "react";

const Footer = () => {
  const footerData = [
    {
      title: "Shop and Learn",
      items: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "Vision",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Services",
      items: [
        "Apple Music",
        "Apple TV+",
        "Apple Fitness+",
        "iCloud",
        "Apple Pay",
        "Apple One",
      ],
    },
    {
      title: "Apple Store",
      items: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Trade In",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "About Apple",
      items: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Events",
        "Contact Apple",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 text-gray-800 mx-auto m-7">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <hr className="border-t-2 border-gray-300 my-6" />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-black mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-gray-500 transition duration-200 hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-t-2 border-gray-300 my-6" />
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Logo and Text */}
        <div className="flex items-center space-x-3">
          <img
            src="/Apple_logo_grey.svg.png"
            alt="Apple Logo"
            className="w-6 object-contain"
          />
          <span className="text-sm">&copy; {new Date().getFullYear()} Apple Inc. All rights reserved.</span>
        </div>

        {/* Links */}
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="#privacy"
            className="text-sm hover:text-gray-500 transition duration-200 hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-sm hover:text-gray-500 transition duration-200 hover:underline"
          >
            Terms of Use
          </a>
          <a
            href="#sitemap"
            className="text-sm hover:text-gray-500 transition duration-200 hover:underline"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

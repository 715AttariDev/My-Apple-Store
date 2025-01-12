## Navigation Menu
```
import { FaSearch, FaShoppingCart } from "react-icons/fa"; // Importing the outlined handbag icon (FaShoppingCart)
import 
const Navbar = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <nav className="flex items-center justify-center space-x-4">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <img
            src="public/Apple_logo_grey.svg.png"
            alt="Apple Logo"
            className="w-4 object-contain filter invert"
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-gray-700 text-xs font-medium items-center">
          <li className="hover:text-black cursor-pointer">Store</li>
          <li className="hover:text-black cursor-pointer">Mac</li>
          <li className="hover:text-black cursor-pointer">iPad</li>
          <li className="hover:text-black cursor-pointer">iPhone</li>
          <li className="hover:text-black cursor-pointer">Watch</li>
          <li className="hover:text-black cursor-pointer">Vision</li>
          <li className="hover:text-black cursor-pointer">AirPods</li>
          <li className="hover:text-black cursor-pointer">TV & Home</li>
          <li className="hover:text-black cursor-pointer">Entertainment</li>
          <li className="hover:text-black cursor-pointer">Accessories</li>
          <li className="hover:text-black cursor-pointer">Support</li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-3">
          {/* Search Icon */}
          <div className="search-icon cursor-pointer text-gray-700 hover:text-black">
            <FaSearch size={14} />
          </div>
          {/* Handbag (Outlined) Icon */}
          <div className="bag-icon cursor-pointer text-gray-700 hover:text-black">
            <FaShoppingCart size={16} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
```
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { getTotalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-700 to-orange-500 shadow-md text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🍽️ Foodie
        </Link>
        <nav className="space-x-6 font-medium">
          <Link to="/" className="hover:text-yellow-200 transition">
            Home
          </Link>
          <Link to="/menu" className="hover:text-yellow-200 transition">
            Menu
          </Link>
          <Link
            to="/cart"
            className="relative hover:text-yellow-200 transition"
          >
            🛒
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {getTotalItems()}
            </span>
          </Link>
          <Link to="/login" className="hover:text-yellow-200 transition">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

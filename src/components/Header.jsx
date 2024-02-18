import React from "react";
import { GiHealthCapsule } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-100 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900"
          >
            <GiHealthCapsule
              className="text-gray-600 h-10 w-10"
              aria-hidden="true"
            />
            <span className="ml-3 text-xl text-gray-800">
              Bursa Nöbetçi Eczaneler
            </span>
          </Link>
          <div className="w-full max-w-xs">
            <input
              type="search"
              name="search"
              id="search"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
              placeholder="Eczane veya ilçe ara..."
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

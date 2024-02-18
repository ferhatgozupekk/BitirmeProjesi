import React from "react";
import { GiHealthCapsule } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-red-500 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white"
          >
            <GiHealthCapsule className="h-10 w-10" aria-hidden="true" />
            <span className="ml-3 text-xl">Bursa Nöbetçi Eczaneler</span>
          </Link>
          <div className="w-full max-w-xs">
            <input
              type="search"
              name="search"
              id="search"
              className="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Eczane veya ilçe ara..."
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

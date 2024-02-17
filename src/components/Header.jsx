import React from "react";
import { GiHealthCapsule } from "react-icons/gi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" bg-green-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <GiHealthCapsule
              className=" text-green-950 h-8 w-8"
              aria-hidden="true"
            />
            <Link
              to="/"
              className="ml-3 self-center text-xl font-semibold whitespace-nowrap dark:text-gray-800"
            >
              Bursa Nöbetçi Eczaneler
            </Link>
          </div>
          <div className="md:flex items-center justify-center flex-1 min-w-0">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">
                Arama
              </label>
              <input
                type="search"
                name="search"
                id="search"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Eczane veya ilçe ara..."
              />
            </div>
          </div>
          <div className="flex items-center justify-end lg:w-0 lg:flex-1">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Bize Ulaşın
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../features/search/searchSlice";
import { useLocation } from "react-router-dom";
import { GiHealthCapsule } from "react-icons/gi";
import { Link } from "react-router-dom";
import { turkceIHarfiDuzelt } from "../utils/stringHelpers";

function Header() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    setInputValue("");
    dispatch(setSearchTerm(""));
  }, [location.pathname]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setInputValue(turkceIHarfiDuzelt(value));
    dispatch(setSearchTerm(turkceIHarfiDuzelt(value)));
  };

  return (
    <header className="bg-red-500 shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6 md:space-x-10">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white"
          >
            <GiHealthCapsule
              className="h-10 w-10 hidden sm:block"
              aria-hidden="true"
            />
            <span className="ml-3 text-3xl font-bold">
              Bursa Nöbetçi Eczane
            </span>
          </Link>
          <div className="w-full max-w-xs">
            <input
              type="search"
              name="search"
              id="search"
              value={inputValue}
              className="w-full p-2 border border-red-300 rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Eczane veya ilçe ara..."
              onChange={handleSearchChange}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { turkceIHarfiDuzelt } from "../utils/stringHelpers";

function Home() {
  const [uniqueDistricts, setUniqueDistricts] = useState([]);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.beo.org.tr/nobet-belediye"
    )
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Object.values(data);
        const districts = new Set(dataArray.map((item) => item.ilce));
        setUniqueDistricts([...districts]);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const filteredDistricts = uniqueDistricts.filter((district) =>
    turkceIHarfiDuzelt(district).includes(turkceIHarfiDuzelt(searchTerm))
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDistricts.map((district, index) => (
          <Link
            key={index}
            to={`/ilce/${district}`}
            className="flex flex-col bg-red-50 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-red-700 mb-2 text-center">
                {district}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;

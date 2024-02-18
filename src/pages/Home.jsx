import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [uniqueDistricts, setUniqueDistricts] = useState([]);

  useEffect(() => {
    // data.json dosyasından veriyi fetch metoduyla çekiyoruz.
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        // Benzersiz ilçeleri belirleyip state'e kaydediyoruz.
        const districts = new Set(data.map((item) => item.ilce));
        setUniqueDistricts([...districts]);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {uniqueDistricts.map((district, index) => (
          <Link
            key={index}
            to={`/ilce/${district}`}
            className="flex flex-col bg-white rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
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

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
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {uniqueDistricts.map((district, index) => (
        <Link
          key={index}
          to={`/ilce/${district}`}
          className="block w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 py-2 bg-green-100 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
        >
          <div className="flex flex-col items-center p-4 bg-white rounded-md hover:bg-green-50">
            <h1 className="text-lg font-semibold text-gray-700">{district}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;

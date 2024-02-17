import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function District() {
  const [pharmacies, setPharmacies] = useState([]);
  const { districtName } = useParams();

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        // İlgili ilçeye ait eczaneleri filtreleyip state'e kaydediyoruz.
        const filteredPharmacies = data.filter(
          (pharmacy) => pharmacy.ilce === districtName
        );
        setPharmacies(filteredPharmacies);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, [districtName]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pharmacies.map((pharmacy) => (
          <div
            key={pharmacy.id}
            className="bg-white shadow overflow-hidden rounded-lg"
          >
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {pharmacy.eczane}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{pharmacy.adres}</p>
              <p className="mt-1 text-sm text-gray-500">
                {pharmacy.adres_tarifi}
              </p>
              <div className="mt-4">
                <a
                  href={`tel:${pharmacy.tel}`}
                  className="text-indigo-600 hover:text-indigo-900 block"
                >
                  Telefon: {pharmacy.tel}
                </a>
                <a
                  href={`https://www.google.com/maps/?q=${pharmacy.enlem},${pharmacy.boylam}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:text-indigo-900 block"
                >
                  Haritada Görüntüle
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default District;

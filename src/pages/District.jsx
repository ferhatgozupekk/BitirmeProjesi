import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function District() {
  const [pharmacies, setPharmacies] = useState([]);
  const { districtName } = useParams();

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.beo.org.tr/nobet-belediye"
    )
      .then((response) => response.json())
      .then((data) => {
        // Nesneyi diziye çevir
        const dataArray = Object.values(data);
        // İlgili ilçeye ait eczaneleri filtreleyip state'e kaydediyoruz.
        const filteredPharmacies = dataArray.filter(
          (pharmacy) => pharmacy.ilce === districtName
        );
        setPharmacies(filteredPharmacies);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, [districtName]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {pharmacies.map((pharmacy, index) => (
          <div
            key={index}
            className="flex flex-col bg-red-50 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-5">
              <h3 className="text-xl font-semibold text-red-700 mb-2 text-center">
                {pharmacy.eczane}
                <br />
                <br />
              </h3>
              <p className="text-red-600 text-sm">
                <b>ADRES: </b> {pharmacy.adres}
              </p>
              {pharmacy.adres_tarifi && (
                <p className="text-red-500 text-sm mt-3">
                  <b>ADRES TARİFİ: </b>
                  {pharmacy.adres_tarifi}
                </p>
              )}
            </div>
            <div className="mt-auto p-5 bg-red-100">
              <a
                href={`tel:${pharmacy.tel}`}
                className="flex items-center justify-center text-red-700 hover:text-red-800 transition-colors duration-200 text-sm font-bold"
              >
                Telefon: {pharmacy.tel}
              </a>
              <a
                href={`https://www.google.com/maps/?q=${pharmacy.enlem},${pharmacy.boylam}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-red-700 hover:text-red-800 transition-colors duration-200 text-sm font-bold mt-3"
              >
                Haritada Görüntüle
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default District;

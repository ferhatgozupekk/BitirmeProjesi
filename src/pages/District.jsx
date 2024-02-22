import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { turkceIHarfiDuzelt } from "../utils/stringHelpers";

function District() {
  const [pharmacies, setPharmacies] = useState([]);
  const { districtName } = useParams();
  const searchTerm = useSelector((state) => state.search.searchTerm);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://www.beo.org.tr/nobet-belediye"
    )
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Object.values(data);

        let filteredPharmacies = dataArray.filter(
          (pharmacy) =>
            turkceIHarfiDuzelt(pharmacy.ilce) ===
            turkceIHarfiDuzelt(districtName)
        );

        if (searchTerm) {
          filteredPharmacies = filteredPharmacies.filter(
            (pharmacy) =>
              turkceIHarfiDuzelt(pharmacy.eczane).includes(
                turkceIHarfiDuzelt(searchTerm)
              ) ||
              turkceIHarfiDuzelt(pharmacy.adres).includes(
                turkceIHarfiDuzelt(searchTerm)
              )
          );
        }

        setPharmacies(filteredPharmacies);
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, [districtName, searchTerm]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
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
                <b> ADRES: </b> {pharmacy.adres}
              </p>
              {pharmacy.adres_tarifi && (
                <p className="text-red-500 text-sm mt-3">
                  <b>ADRES TARİFİ: </b>
                  {pharmacy.adres_tarifi}
                </p>
              )}
            </div>
            <div className="mt-auto p-5 bg-red-100 flex justify-center space-x-2">
              {pharmacy.tel && (
                <a
                  href={`tel:${pharmacy.tel}`}
                  className="inline-flex items-center justify-center px-4 py-2 bg-red-500 text-white font-bold text-sm rounded-lg shadow hover:bg-red-600 transition-colors duration-200"
                >
                  <BsFillTelephoneFill className="mr-2" /> Telefon:{" "}
                  {pharmacy.tel}
                </a>
              )}
              <a
                href={`https://www.google.com/maps/?q=${pharmacy.enlem},${pharmacy.boylam}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-red-500 text-white font-bold text-sm rounded-lg shadow hover:bg-red-600 transition-colors duration-200"
              >
                <SiGooglemaps className="mr-2" /> Haritada Görüntüle
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default District;

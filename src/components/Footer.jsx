import React from "react";

function Footer() {
  return (
    <footer className="bg-red-200 text-gray-500 text-center p-4">
      <p>Tüm Hakları Saklıdır © {new Date().getFullYear()} Ferhat Gözüpek</p>
    </footer>
  );
}

export default Footer;

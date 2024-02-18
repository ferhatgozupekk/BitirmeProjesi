import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-900 text-center p-4 mt-8">
      <p>Tüm Hakları Saklıdır © {new Date().getFullYear()} Ferhat Gözüpek</p>
    </footer>
  );
}

export default Footer;

import React from "react";

function Footer() {
  return (
    <footer className="bg-red-200 text-red-600 text-center p-4">
      <p>Tüm Hakları Saklıdır © {new Date().getFullYear()} Ferhat Gözüpek</p>
      <p>
        <b>
          Web sitesinin aktif hale getirilmesi için demo sunucusunun
          etkinleştirilmesi gerekmektedir. Aktivasyon işlemi için lütfen
          aşağıdaki bağlantıyı kullanınız.
        </b>
      </p>
      <a href="https://cors-anywhere.herokuapp.com/corsdemo" target="blank">
        <b className=" text-red-900">
          https://cors-anywhere.herokuapp.com/corsdemo
        </b>
      </a>
    </footer>
  );
}

export default Footer;

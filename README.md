# Bursa Nöbetçi Eczaneler Web Uygulaması

Bursa'daki nöbetçi eczaneleri bulmanıza yardımcı olan bir web uygulamasıdır. Bu uygulama, kullanıcıların Bursa'nın farklı ilçelerindeki nöbetçi eczanelere hızlı ve kolay bir şekilde erişim sağlamalarını amaçlar.

**Demo**: [Bursa Nöbetçi Eczaneler](https://bitirme-projesi-mocha.vercel.app)

## ÇOK ÖNEMLİ BİLGİLENDİRME

Websitesini açtığınızda boş bir ekranla karşılaşırsanız, bu durum API hizmetinden gelen verinin CORS politikası nedeniyle engellenmesinden kaynaklanmaktadır. Bu sorunu aşmak için, `cors-anywhere` demo sunucusunu kullanmaktayız. Siteyi kullanıma hazır hale getirmek için lütfen ilk olarak sitenin en altında bulunan footer'daki "CORS Anywhere Demo Sunucusunu Aktifleştir" linkine tıklayarak, cors-anywhere demo sunucusunu aktifleştirin.

## Veri Kaynağı

Bu uygulama, Bursa Büyükşehir Belediyesi'nin sağladığı [Bursa Açık Veri Platformu](https://www.beo.org.tr/nobet-belediye) üzerinden nöbetçi eczane bilgilerini kullanmaktadır. Veriler, belirtilen API aracılığıyla günlük olarak güncellenmektedir ve uygulama bu verileri gerçek zamanlı olarak kullanıcıya sunmaktadır.

## Teknolojiler

- **Frontend**: React.js, Vite, Tailwind CSS, React Router, React Icons
- **State Yönetimi**: Redux
- **Harita Servisi**: Google Maps API
- **API**: CORS Anywhere (Geliştirme aşamasında API isteklerinde CORS sorununu çözmek için kullanılmıştır.)

## Uygulama Özellikleri

- **İlçe Bazında Filtreleme**: Bursa'nın ilçelerine göre nöbetçi eczaneleri listeleme.
- **Hızlı Arama**: Arama formu üzerinden ilçe, eczane adı veya adres bilgisi ile hızlı bir şekilde filtreleme yapma imkanı.
- **Eczane Detayları**: Seçilen eczanenin adres, telefon numarası gibi detaylarına erişim.
- **Harita ve Telefon Erişimi**: Eczane kartlarında bulunan telefon ve harita butonları sayesinde eczanelere hızlıca ulaşım.

Uygulamayı kullanmaya başladığınızda, Bursa'nın ilçelerini içeren bir liste ile karşılaşacaksınız. İlçe seçimi yaptıktan sonra, o ilçedeki nöbetçi eczanelerin listesi görüntülenecek ve ilgili eczane bilgilerine erişebileceksiniz.

## Kullanım Senaryoları

- **İlçeye Göre Nöbetçi Eczane Araştırma**: İlçe seçerek, o ilçedeki nöbetçi eczaneleri görebilirsiniz.
- **Eczane veya Adres Arama**: Bilinen bir eczanenin nöbetçi olup olmadığını veya belirli bir semtte nöbetçi eczane olup olmadığını arayabilirsiniz.
- **Telefon ve Harita Üzerinden Eczaneye Ulaşım**: Eczane kartlarındaki telefon ve harita butonlarını kullanarak, eczanelerle kolayca iletişime geçebilir ve konumlarını google maps üzerinden görebilirsiniz.

## Ekran Görüntüleri

Uygulamanın nasıl göründüğüne ve çalıştığına dair bazı ekran görüntüleri aşağıda yer almaktadır:

![Ana Sayfa](https://private-user-images.githubusercontent.com/119225167/307180944-9763827b-4144-4bed-9d56-ffa65e19ca5d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NDQ1MzgsIm5iZiI6MTcwODY0NDIzOCwicGF0aCI6Ii8xMTkyMjUxNjcvMzA3MTgwOTQ0LTk3NjM4MjdiLTQxNDQtNGJlZC05ZDU2LWZmYTY1ZTE5Y2E1ZC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyMlQyMzIzNThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05M2E4M2JhOTQxNzQ5YzI3M2U3NDE2MGEzZjA2NGI5ZDNjMzMxOTZjOGI2ZGEwMmFiOWQ1OTgwZTNhMjUxMGJmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.N_T38Q_MnkLD05nFr70P9wWiBSZtM6w3araKLWMTqGs)
![Nöbetçi Eczaneler](https://private-user-images.githubusercontent.com/119225167/307181438-cb7608e7-7c57-43ce-9513-42cef9b21871.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NDQ1NjYsIm5iZiI6MTcwODY0NDI2NiwicGF0aCI6Ii8xMTkyMjUxNjcvMzA3MTgxNDM4LWNiNzYwOGU3LTdjNTctNDNjZS05NTEzLTQyY2VmOWIyMTg3MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyMlQyMzI0MjZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kZGJlOTZiMGFmMjA5YWQ4YmQxN2UwZjZhOTJjYmY0MjAwYWY4OTFjZmJhNDFlMTA1ODRiZDVhNGU4NTdlMmUwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.fg3UekZrcE3MnqC9d6pV1IZdG6HeIsus00EpYSX4h3s)
![Ana Sayfa Mobil Görünüm](https://private-user-images.githubusercontent.com/119225167/307181520-700cac7e-9dc8-41ac-90e1-908e6f16b85b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NDQ1NzksIm5iZiI6MTcwODY0NDI3OSwicGF0aCI6Ii8xMTkyMjUxNjcvMzA3MTgxNTIwLTcwMGNhYzdlLTlkYzgtNDFhYy05MGUxLTkwOGU2ZjE2Yjg1Yi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyMlQyMzI0MzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zN2E1ZmY0NjVhNTQ1MDI4YTQ4M2Y5ZGJjYTA4YTBjMzFkYTZlNjA4NTkxMDdkNjMwMzFmMDQ0ODcxMmFjNjVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.cdxAuWqodXymlJXSePO7qncNG1XSiJ1E-F3lHYOWPM4)
![Nöbetçi Eczaneler Mobil Görünüm ](https://private-user-images.githubusercontent.com/119225167/307181568-c162dd8c-32a7-48b4-891d-988048898e3f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MDg2NDQ1OTQsIm5iZiI6MTcwODY0NDI5NCwicGF0aCI6Ii8xMTkyMjUxNjcvMzA3MTgxNTY4LWMxNjJkZDhjLTMyYTctNDhiNC04OTFkLTk4ODA0ODg5OGUzZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwMjIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDIyMlQyMzI0NTRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1lOGExMGQ4MjhmM2YwZDhiZDI3MjFiNzljODg0Yjk1ZTZiZmNmMTU2MGM2ZWU3ZjgxODUwNGY5ZDdjNTJjOWE4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.v_C1ZNVQyO1AQmoLkcknlHiNAmKkPC4L-wzs2tFsIHM)

## Proje Kurulumu ve Çalıştırılması

Bu proje Vite ve React kullanılarak oluşturulmuştur. Aşağıdaki adımlar, projeyi yerel geliştirme ortamınızda nasıl kurup çalıştıracağınızı göstermektedir.

### Önkoşullar

Projeyi kurmadan önce, sisteminizde [Node.js](https://nodejs.org/en/) (önerilen: en son LTS versiyonu) yüklü olduğundan emin olun. Node.js yüklü olduğunda, npm (Node.js ile birlikte gelir) veya [Yarn](https://yarnpkg.com/) paket yöneticilerinden birine sahip olacaksınız.

### Projeyi Kurma ve Çalıştırma

1. Öncelikle, projeyi GitHub'dan klonlayın veya indirin:
   ```bash
   git clone https://github.com/ferhatgozupekk/BitirmeProjesi.git
   cd BitirmeProjesi
   ```

npm install

# veya Yarn kullanıyorsanız

yarn

npm run dev

# veya Yarn kullanıyorsanız

yarn dev

npm run build

# veya Yarn kullanıyorsanız

yarn build

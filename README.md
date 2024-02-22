# Bursa Nöbetçi Eczaneler Web Uygulaması

Bursa'daki nöbetçi eczaneleri bulmanıza yardımcı olan bir web uygulamasıdır. Bu uygulama, kullanıcıların Bursa'nın farklı ilçelerindeki nöbetçi eczanelere hızlı ve kolay bir şekilde erişim sağlamalarını amaçlar.

**Demo**: [Bursa Nöbetçi Eczaneler](https://bitirme-projesi-mocha.vercel.app)

## Önemli Bilgilendirme

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

![Ana Sayfa](https://github.com/ferhatgozupekk/BitirmeProjesi/issues/1#issue-2150095120)
![Nöbetçi Eczaneler](https://github.com/ferhatgozupekk/BitirmeProjesi/issues/2#issue-2150096381)
![Ana Sayfa Mobil Görünüm](https://github.com/ferhatgozupekk/BitirmeProjesi/issues/3#issue-2150096880)
![Nöbetçi Eczaneler Mobil Görünüm ](https://github.com/ferhatgozupekk/BitirmeProjesi/issues/4#issue-2150097144)

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

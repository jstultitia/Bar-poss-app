# Bar POS App

## Proje Amacı
Bar POS (Point of Sale) uygulaması, bar ve kafe gibi işletmelerde ürün satışı ve stok takibini kolaylaştırmak için
geliştirilmiş bir sistemdir.
Satış sırasında kullanılan ürünleri yönetir, reçetelerdeki malzemelerin stoklarını günceller ve işletme performansını raporlamayı hedefler.

## Kullanılan Teknolojiler
- **Node.js & Express**: RESTful API ve iş mantığı.
- **React**: Kullanıcı arayüzü için bileşen tabanlı yapı.
- **PostgreSQL**: Ürün, stok ve satış verilerini saklamak için ilişkisel veritabanı.
- **Material UI**: Tutarlı ve erişilebilir arayüz bileşenleri.

## UI Prensipleri
- **Duyarlı Tasarım**: Masaüstü ve mobil cihazlarda sorunsuz kullanım.
- **Erişilebilirlik**: Klavye navigasyonu ve ARIA etiketleriyle desteklenmiş arayüz.
- **Tutarlılık**: Renk paleti ve bileşen kullanımı Material Design standartlarına dayanır.
- **Basitlik**: Kullanıcıların hızlı işlem yapabilmesi için minimal ve anlaşılır ekranlar.

## Çalıştırma
1. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```
2. Geliştirme modunda uygulamayı başlatın:
   ```bash
   npm run dev
   ```

## Test Etme
Testleri çalıştırmak için:
```bash
npm test
```

## Dağıtım
1. Üretim için derleme oluşturun:
   ```bash
   npm run build
   ```
2. Sunucu üzerinde uygulamayı başlatın:
   ```bash
   npm start
   ```

## Çevresel Değişkenler
Uygulama aşağıdaki çevresel değişkenlere ihtiyaç duyar. Değerleri `.env` dosyasında saklayabilirsiniz.

```env
PORT=3000
DATABASE_URL=postgres://kullanici:sifre@localhost:5432/barpos
JWT_SECRET=super-gizli-anahtar
```

## Konfigürasyon Örneği
Ek yapılandırmalar için `config.json` dosyası kullanılabilir:

```json
{
  "logging": {
    "level": "info"
  },
  "features": {
    "enableInventory": true
  }
}
```

Bu dosyayı `config.example.json` olarak paylaşabilir ve gerçek ayarları içeren `config.json` dosyasını versiyon kontrolünden hariç tutabilirsiniz.

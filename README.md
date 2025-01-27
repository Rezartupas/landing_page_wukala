# Landing Page Wukala

## Deskripsi Proyek
Landing Page Wukala adalah sebuah halaman web yang dirancang untuk memperkenalkan dan mempromosikan program Wukala dari muslim101.id. Halaman ini dibuat dengan tujuan untuk menarik perhatian pengunjung dan mengarahkan mereka untuk melakukan pendaftaran sebagai wukala di muslim101.id.

## Fitur
- Desain responsif yang dapat menyesuaikan dengan berbagai ukuran layar.
- Navigasi yang mudah dan intuitif.
- Konten yang menarik dan informatif.
- Formulir kontak untuk memudahkan komunikasi dengan pengunjung.
- Integrasi dengan media sosial.

## Teknologi yang Digunakan
- HTML5
- CSS3
- JavaScript

## Cara Menggunakan
1. Clone repositori ini ke komputer Anda:
    ```bash
    git clone [URL repositori]
    ```
2. Buka folder proyek:
    ```bash
    cd landing page wukala
    ```
3. Buka file `index.html` di browser Anda untuk melihat halaman landing page.

## Menambahkan Pixel ID
1. Buka file `index.html`.
2. Cari bagian `<head>` di dalam file tersebut.
3. Tambahkan kode berikut sebelum tag `</head>`:
    ```html
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
       fbq('init', 'YOUR_PIXEL_ID');
      fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
    ```
4. Ganti `YOUR_PIXEL_ID` dengan Pixel ID Anda.

## Mengganti Nomor WhatsApp
1. Buka file `index.html`.
2. Cari bagian yang mengandung link atau script untuk WhatsApp.
3. Ganti nomor WhatsApp yang ada dengan nomor WhatsApp Anda. Contoh:
    ```html
    <a href="https://wa.me/6281234567890?text=Saya+ingin+mendaftar+sebagai+Wukala+di+Muslim101." class="floating-button">Daftar Sekarang!</a>
    ```
    Ganti `1234567890` dengan nomor WhatsApp Anda.

## Kontribusi
Jika Anda ingin berkontribusi pada proyek ini, silakan ikuti langkah-langkah berikut:
1. Fork repositori ini.
2. Buat branch baru untuk fitur atau perbaikan Anda:
    ```bash
    git checkout -b fitur-baru
    ```
3. Lakukan perubahan yang diperlukan dan commit:
    ```bash
    git commit -m "Menambahkan fitur baru"
    ```
4. Push ke branch Anda:
    ```bash
    git push origin fitur-baru
    ```
5. Buat pull request ke repositori ini.

## Lisensi
Proyek ini dilisensikan di bawah [nama lisensi]. Silakan lihat file `LICENSE` untuk informasi lebih lanjut.

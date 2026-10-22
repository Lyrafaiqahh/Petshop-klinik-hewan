# Brief — Petshop & Klinik Hewan (Template 1)

Brief ini adalah panduan kerja untuk kategori ini. Bangun dengan **Tokigo starter** (Next.js 16 App Router + Tailwind v4 + TypeScript strict). Baca dan patuhi **`AGENTS.md`**; brief ini melengkapi aturan tersebut.

## Yang wajib ada (semua kategori)

- Navbar (logo, menu maks 5, tombol CTA booking + WhatsApp) · Hero · Tentang + keunggulan (min 3 poin) · Layanan & produk (gambar, deskripsi, harga/estimasi) · Galeri · Testimoni · FAQ · Kontak & lokasi (alamat, WA, jam, Maps) · CTA booking via WhatsApp · Footer.
- Responsive 375–1600px+ tanpa horizontal overflow; **light & dark mode** wajib (pakai `ThemeToggle` bawaan starter).
- Semua tombol, navigasi, dan kartu berfungsi — tidak ada link mati, `href="#"`, atau kartu tanpa halaman tujuan.
- Konten contoh relevan kategori (bukan Lorem Ipsum); harga format `Rp 25.000`; jangan mengarang alamat/harga/data klien yang belum diberikan.
- SEO: metadata tiap halaman, heading berurutan, alt text gambar; favicon + identitas brand.
- Gambar dari Unsplash/Pexels/Pixabay — unduh ke `public/` (jangan hotlink), render dengan `next/image`.
- Selesai hanya jika `pnpm typecheck && pnpm lint && pnpm format:check && pnpm build` lolos.
- Pengecekan visual & browser console (tidak ada error, tidak ada gambar gagal muat) dilakukan oleh developer sebelum menyerahkan hasil — agent dilarang memverifikasi via browser.

## Arah visual

- Referensi desain utama: gambar referensi ada langsung di folder ini (root folder — mis. `original-*.webp`). Ikuti nuansa, tipografi, palet, dan komposisinya.
- Jangan menyalin aset atau teks mentah dari referensi, dan jangan hotlink gambar — foto tetap diunduh (Unsplash/Pexels/Pixabay) ke `public/`.
- Nama brand/website **tidak boleh mengikuti contoh pada gambar referensi** — tentukan sendiri nama yang baik, relevan dengan kategori ini, dan terasa natural dalam bahasa Indonesia.
- Jika gambar referensi belum tersedia: ajukan design brief singkat (hero, tipografi, palet, ritme, signature detail) dan tunggu konfirmasi sebelum menulis kode.
- Aturan tampilan tetap mengikuti `AGENTS.md`: anti AI-slop, maks 2 font family, gradient/glass seperlunya, motion satu bahasa gerak, wajib light & dark mode.
- Hasil antar template di kategori yang sama harus terlihat berbeda; gambar referensi adalah pembedanya.
- Catatan tambahan di bagian bawah bersifat tips — jika bertentangan dengan referensi, ikuti referensi.

## Profil

Bisnis pet care yang umumnya menggabungkan beberapa layanan sekaligus: klinik hewan, grooming, pet hotel, dan petshop. Keputusan pemilik hewan cepat dan emosional, tetapi tetap berbasis kepercayaan pada dokter dan kebersihan tempat. CTA: **booking layanan via WhatsApp**; untuk kondisi darurat, **telepon** — bukan WA dan bukan form.

## Halaman & section khas

**Halaman wajib:** `/`, `/layanan`, `/booking`, `/dokter` — harus dibuat sebagai route nyata, bukan hanya section di homepage. Semua kartu/tombol yang mengarah ke detail harus punya halaman tujuan yang benar-benar dibuat.

- `/` — hero (foto hewan + CTA booking + jam buka hari ini + nomor darurat yang mudah terlihat), layanan utama (klinik, grooming, pet hotel, petshop), promo berjalan, dokter & jadwal ringkas, testimoni pemilik, FAQ, CTA.
- `/layanan` — pisahkan layanan medis (konsultasi & pemeriksaan, vaksinasi, steril, operasi, rawat inap, home visit) dan non-medis (grooming per ukuran hewan, pet hotel, produk petshop); cantumkan estimasi harga atau "mulai dari" dengan catatan bahwa angka final ditentukan setelah pemeriksaan/kondisi hewan.
- `/booking` — form: jenis & nama hewan, layanan, cabang (bila multi-cabang), tanggal & jam, keluhan/catatan → WhatsApp prefilled. Tampilkan peringatan jelas bahwa form ini bukan jalur darurat.
- `/dokter` — profil dokter (spesialisasi) + jadwal praktik per hari; bila multi-cabang, jadwal per cabang.
- `/kontak` — cabang (alamat, Maps), jam operasional per hari, WA admin, nomor darurat (opsional; boleh section bila konten pendek).

## Fitur interaktif

- Booking form dengan pilihan layanan dan cabang; hasilnya WA prefilled yang menyebut detail booking ("Halo, saya ingin booking grooming untuk kucing, Sabtu 10.00 di cabang ...").
- Jadwal praktik dokter per hari yang mudah dipindai (tabel/daftar, bukan teks panjang).
- Filter kategori layanan (medis/non-medis).
- Katalog produk petshop **tanpa cart/checkout** — pembelian diarahkan ke WA atau kunjungan toko; e-commerce penuh di luar cakupan template ini.

## Data di `content/`

- Layanan: `{ nama, kategori, deskripsi, estimasi? }`.
- Paket: `{ nama, kategori (grooming/hotel), durasi, cakupan[], harga }`.
- Dokter: `{ nama, spesialisasi, jadwal[] }`.
- Cabang: `{ nama, alamat, telepon, jam[], maps }`.
- Produk: `{ nama, kategori }` (opsional; tanpa harga bila cepat berubah).

## SEO & JSON-LD

- `VeterinaryCare` (tambahkan `PetStore` bila sisi retail menonjol); FAQ (biaya konsultasi, layanan darurat, jenis hewan yang ditangani, syarat penitipan).
- Sebut kota/area layanan secara alami di copy untuk pencarian lokal (mis. "klinik hewan di <kota>") — tanpa keyword stuffing.

## Catatan tambahan

- Nada visual hangat, bersih, dan terpercaya — bukan kekanak-kanakan. Kartu layanan medis harus terasa klinis dan rapi; sentuhan warna hangat cocok untuk grooming/hotel.
- Foto hewan boleh dari stok, tetapi jangan menampilkan foto stok seolah-olah itu pasien atau fasilitas milik klien. Tandai agar diganti foto asli sebelum go-live.
- Jangan menulis klaim medis berlebihan atau janji kesembuhan; sertakan catatan singkat bahwa informasi di situs bukan pengganti diagnosis dokter hewan.
- Nomor darurat harus konsisten di header/footer/kontak dan berupa **telepon**, bukan WA. Booking form dan WA bukan jalur darurat — tulis eksplisit di halaman booking.
- Harga medis = kisaran + penjelasan; harga non-medis (grooming/hotel) boleh pasti per paket/ukuran hewan.
- Syarat pet hotel (vaksin wajib, bebas kutu, dsb.) ditampilkan sebelum booking — ini pertanyaan yang paling sering muncul.
- Sebut istilah yang akrab untuk pemilik hewan ("anabul") secukupnya; jangan berlebihan.

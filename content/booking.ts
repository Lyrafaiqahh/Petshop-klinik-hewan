export const bookingPage = {
  metadata: {
    title: "Booking Layanan",
    description:
      "Isi form booking Ruang Anabul untuk menyiapkan pesan WhatsApp berisi detail layanan, hewan, cabang, dan jadwal. Booking menunggu konfirmasi admin.",
  },
  hero: {
    eyebrow: "Booking",
    title: "Atur jadwal kunjungan anabul.",
    description:
      "Isi detail di bawah, periksa ringkasan, lalu kirim pesan WhatsApp yang sudah disiapkan. Form ini tidak menyimpan data ke server dan bukan jalur darurat.",
    note: "Jadwal baru dianggap terisi setelah admin mengonfirmasi ketersediaan.",
  },
  doctorPrefill: "Ingin konsultasi dengan {nama}.",
  hotelNote: {
    eyebrow: "Rencana penitipan",
    title: "Booking pet hotel? Siapkan syarat ini lebih dulu.",
    description:
      "Pet hotel hanya menerima anabul yang sehat dan sudah divaksin. Periksa syarat berikut sebelum memilih tanggal menginap agar check-in berjalan lancar.",
    linkLabel: "Baca syarat penitipan lengkap",
    linkHref: "/layanan#syarat-hotel",
    note: "Syarat dan tarif penitipan pada website demo ini adalah data simulasi. Konfirmasi ulang kepada admin sebelum check-in.",
  },
  emergency: {
    label: "Khusus darurat",
    badge: "Bukan jalur darurat",
    callLabel: "Telepon nomor darurat",
    note: "Nomor darurat pada website demo ini adalah data simulasi dan tidak dipantau secara nyata.",
  },
  form: {
    eyebrow: "Form booking",
    title: "Detail kunjungan",
    description:
      "Kolom bertanda * wajib diisi. Data hanya digunakan untuk menyusun pesan WhatsApp.",
    requiredHint: "* Wajib diisi",
    sectionOwner: "Data pemilik",
    sectionPet: "Data anabul",
    sectionService: "Layanan & cabang",
    sectionSchedule: "Jadwal",
    sectionNotes: "Catatan tambahan",
    categoryLabels: {
      medis: "Medis",
      nonmedis: "Nonmedis",
    },
    fields: {
      ownerName: {
        label: "Nama pemilik",
        placeholder: "Contoh: Sinta Rahayu",
        error: "Nama pemilik minimal 2 karakter.",
      },
      whatsapp: {
        label: "Nomor WhatsApp",
        placeholder: "Contoh: 0812 3456 7890",
        hint: "Gunakan nomor aktif agar admin dapat mengonfirmasi.",
        error: "Nomor WhatsApp wajib diisi.",
        invalidError:
          "Masukkan nomor Indonesia yang valid, misalnya 0812 3456 7890.",
      },
      animalType: {
        label: "Jenis hewan",
        placeholder: "Pilih jenis hewan",
        error: "Pilih jenis hewan.",
        options: ["Kucing", "Anjing", "Lainnya"],
      },
      animalName: {
        label: "Nama anabul",
        placeholder: "Contoh: Mochi",
        error: "Nama anabul wajib diisi.",
      },
      animalAge: {
        label: "Usia anabul",
        placeholder: "Contoh: 2 tahun",
        hint: "Opsional. Tulis perkiraan usia bila tidak yakin.",
      },
      serviceCategory: {
        label: "Kategori layanan",
        placeholder: "Pilih kategori",
        error: "Pilih kategori layanan.",
        emptyOption: "Pilih kategori",
      },
      service: {
        label: "Layanan",
        placeholder: "Pilih layanan",
        error: "Pilih layanan yang diinginkan.",
        hint: "Daftar layanan mengikuti kategori yang dipilih.",
        emptyOption: "Pilih layanan",
        selectCategoryFirst: "Pilih kategori terlebih dahulu",
      },
      branch: {
        label: "Cabang",
        placeholder: "Pilih cabang",
        error: "Pilih cabang.",
      },
      date: {
        label: "Tanggal kunjungan",
        hint: "Tanggal lampau tidak dapat dipilih.",
        error: "Pilih tanggal kunjungan.",
        pastError: "Tanggal kunjungan tidak boleh di masa lalu.",
      },
      time: {
        label: "Perkiraan waktu",
        placeholder: "Pilih waktu",
        error: "Pilih perkiraan waktu kunjungan.",
        hint: "Waktu tersedia akan dikonfirmasi ulang oleh admin.",
        pastTimeError:
          "Waktu ini sudah lewat. Pilih waktu lain atau tanggal berikutnya.",
      },
      notes: {
        label: "Catatan",
        placeholder:
          "Ceritakan keluhan, kebutuhan khusus, atau dokter yang ingin ditemui.",
        hint: "Opsional. Hindari menulis data medis sensitif yang tidak perlu.",
      },
    },
    timeSlots: [
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00",
      "13:00",
      "14:00",
      "15:00",
      "16:00",
      "17:00",
      "18:00",
      "19:00",
    ],
    submitLabel: "Siapkan Pesan WhatsApp",
    submitHint:
      "Kamu akan diarahkan ke WhatsApp dengan pesan yang sudah terisi. Pesan belum terkirim sampai kamu menekan tombol kirim di WhatsApp.",
    validationSummary: "Periksa kembali kolom yang ditandai.",
  },
  message: {
    intro:
      "Halo Ruang Anabul, saya ingin mengajukan booking layanan untuk anabul saya.",
    animalTypeLabel: "Jenis hewan",
    animalNameLabel: "Nama anabul",
    animalAgeLabel: "Usia anabul",
    closing:
      "Mohon konfirmasi ketersediaan jadwal. Saya memahami booking ini belum tersimpan dan masih menunggu konfirmasi admin.",
  },
  summary: {
    title: "Ringkasan booking",
    empty: "Lengkapi form untuk melihat ringkasan.",
    ownerLabel: "Pemilik",
    whatsappLabel: "WhatsApp",
    animalLabel: "Anabul",
    serviceLabel: "Layanan",
    categoryLabel: "Kategori",
    branchLabel: "Cabang",
    scheduleLabel: "Jadwal",
    scheduleSuffix: "WIB",
    notesLabel: "Catatan",
    priceLabel: "Estimasi layanan",
    statusLabel: "Status",
    statusValue: "Menunggu konfirmasi",
    statusNote:
      "Belum tersimpan di sistem dan belum dikonfirmasi. Admin akan memeriksa ketersediaan setelah pesan WhatsApp dikirim.",
    noAge: "Usia belum diisi",
    noNotes: "Tidak ada catatan tambahan",
    notSelected: "Belum dipilih",
  },
  confirmation: {
    title: "Pesan WhatsApp sudah disiapkan.",
    description:
      "Periksa kembali isi pesan di WhatsApp, lalu tekan kirim. Booking belum dikonfirmasi sampai admin membalas dan menyetujui jadwal.",
    openLabel: "Buka WhatsApp lagi",
    resetLabel: "Isi booking baru",
    popupNote:
      "Jika WhatsApp tidak terbuka otomatis, gunakan tautan di atas. Pastikan pop-up tidak diblokir.",
  },
  notice:
    "Form ini tidak terhubung ke backend. Tidak ada data booking yang tersimpan di website.",
  disclaimer:
    "Informasi pada website ini hanya untuk tujuan informasi umum dan tidak menggantikan pemeriksaan atau diagnosis dokter hewan.",
};

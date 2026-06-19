/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, PricingPlan, ServiceItem, Testimonial, FaqItem } from "../types";

export const projectsData: Project[] = [
  {
    id: "p1",
    name: "Point Of Sale Cafe Magerlab Mojokerto",
    category: "F&B",
    filterCategory: "Web Dev",
    description: "Website pemesanan online dan sistem kasir cerdas untuk kedai kopi lokal.",
    image: "/pos_cafe_ui.png",
    dataAlt: "A stark, high-contrast monochrome digital interface design for a coffee shop app named Kopi Senja.",
    features: [
      "Menu Kopi Digital Dinamis & Interaktif",
      "Sistem Pemesanan Online Instan",
      "Integrasi API Lokasi Google Maps",
      "Sistem Feedback Pelanggan Terintegrasi"
    ],
    detailOverview: "Aplikasi company profile dan reservasi online bercita rasa lokal yang mempermudah pecinta kopi melakukan pre-order online tanpa perlu antre di outlet."
  },
  {
    id: "p2",
    name: "Aplikasi Kasir Laundry Juragan",
    category: "Jasa",
    filterCategory: "Web Dev",
    description: "Dashboard kasir POS interaktif untuk manajemen pesanan laundry lokal.",
    image: "/laundry_app_ui.png",
    dataAlt: "A bold, monochromatic web dashboard design for a repair service company named TechRepair.",
    features: [
      "Manajemen Pesanan Realtime",
      "Sistem Pelacakan Status Cucian",
      "Tombol Integrasi Konsultasi WhatsApp",
      "Optimasi UI/UX Modern & Responsif"
    ],
    detailOverview: "Aplikasi kasir laundry andalan dengan performa tinggi demi memudahkan pencatatan dan pelacakan pesanan cuci dengan lebih rapi."
  },
  {
    id: "p3",
    name: "Company Profile PT Jaya Konstruksi",
    category: "Kontraktor",
    filterCategory: "Web Dev",
    description: "Website profil perusahaan profesional untuk layanan kontraktor sipil dan bangunan.",
    image: "/company_profile_ui.png",
    dataAlt: "A minimalist e-commerce interface for a retail brand named BoutiqueKu, rendered in stark black and white.",
    features: [
      "Katalog Proyek Neo-Brutalism Responsif",
      "Form Konsultasi Proyek Langsung",
      "Profil Tim dan Portofolio Interaktif",
      "Kecepatan Halaman Teroptimasi Maksimal"
    ],
    detailOverview: "Website company profile profesional yang memanjakan mata klien lewat kurasi tata letak estetik berkecepatan muat tinggi demi meningkatkan kredibilitas."
  },
  {
    id: "p4",
    name: "Aplikasi Belajar Ngaji Anak 'IqraKu'",
    category: "Edukasi",
    filterCategory: "Mobile App",
    description: "Aplikasi seluler interaktif yang menyenangkan untuk membantu anak-anak belajar membaca Al-Quran dengan metode Iqra.",
    image: "/iqra_app_ui.png",
    dataAlt: "A colorful, playful mobile app UI design for a children's Quran learning application.",
    features: [
      "Modul Pembelajaran Interaktif Penuh Warna",
      "Sistem Pelacakan Kemajuan Belajar Otomatis",
      "Kuis Menyenangkan & Gamifikasi Reward",
      "UI Ramah Anak tanpa Iklan Mengganggu"
    ],
    detailOverview: "Solusi platform edukasi seluler modern dengan antarmuka yang sangat ramah anak untuk membuat proses belajar agama menjadi lebih menyenangkan."
  },
  {
    id: "p5",
    name: "Toko Buku Online 'BukuLoka'",
    category: "Retail",
    filterCategory: "Web Dev",
    description: "Desain e-commerce yang bersih dan minimalis untuk toko buku independen lokal dengan koleksi lengkap.",
    image: "/bukuloka_ecommerce_ui.png",
    dataAlt: "A clean, minimalist e-commerce website UI design for an independent bookstore named BukuLoka.",
    features: [
      "Katalog Buku Berdasarkan Kategori Lengkap",
      "Sistem Pencarian Cerdas & Rekomendasi",
      "Integrasi Keranjang & Pembayaran Multi-Bank",
      "Review & Rating dari Sesama Pembaca"
    ],
    detailOverview: "Etalase digital elegan yang fokus pada keterbacaan tinggi dan pengalaman belanja buku senyaman mungkin bagi para pecinta literatur lokal."
  },
  {
    id: "p6",
    name: "Studio Fotografi 'Sinar Momen'",
    category: "Media",
    filterCategory: "Branding",
    description: "Portofolio website premium dan sinematik untuk studio fotografi pernikahan dan komersial profesional.",
    image: "/sinarmomen_portfolio_ui.png",
    dataAlt: "A premium, cinematic portfolio website UI design for a photography studio.",
    features: [
      "Galeri Foto Resolusi Tinggi (High-Res)",
      "Pemesanan Jadwal Sesi Pemotretan Otomatis",
      "Integrasi Album Klien dengan Password",
      "Tampilan Mode Gelap (Dark Mode) Elegan"
    ],
    detailOverview: "Sistem identitas visual dan portofolio digital yang memadukan estetika premium untuk menonjolkan kualitas karya fotografi kepada calon klien kelas atas."
  },
  {
    id: "p7",
    name: "Sistem Manajemen Klinik 'GigiSehat'",
    category: "SaaS",
    filterCategory: "Web Dev",
    description: "Sistem informasi manajemen (SIM) klinik berbasis web untuk pencatatan rekam medis dan jadwal temu janji pasien.",
    image: "/gigisehat_dashboard_ui.png",
    dataAlt: "Web dashboard mockup for Dental Clinic Management System",
    features: [
      "Jadwal Temu Janji Dokter Real-Time",
      "Pencatatan Rekam Medis Elektronik (EMR)",
      "Sistem Billing & Kasir Terintegrasi",
      "Dashboard Analitik Kunjungan Pasien"
    ],
    detailOverview: "Aplikasi manajemen klinik yang memudahkan dokter dan staf administrasi mengelola antrean dan rekam medis secara digital, aman, dan efisien."
  },
  {
    id: "p8",
    name: "Aplikasi Pemesanan Futsal 'AyoMain'",
    category: "App",
    filterCategory: "Mobile App",
    description: "Aplikasi mobile booking lapangan olahraga yang memungkinkan pengguna melihat ketersediaan jadwal secara instan.",
    image: "https://placehold.co/800x600/10b981/ffffff?text=Futsal+App+Mockup",
    dataAlt: "Mobile app mockup for Futsal Booking",
    features: [
      "Cek Ketersediaan Lapangan Real-Time",
      "Pembayaran DP (Down Payment) Online",
      "Sistem Notifikasi Pengingat Jadwal",
      "Manajemen Member & Promo Diskon"
    ],
    detailOverview: "Platform booking lapangan olahraga yang mendigitalisasi proses reservasi konvensional menjadi lebih cepat dan tanpa bentrok jadwal."
  },
  {
    id: "p9",
    name: "Brand Identity Koperasi Tani 'Bumi Berkah'",
    category: "Branding",
    filterCategory: "Branding",
    description: "Perancangan ulang identitas visual logo dan desain kemasan produk pertanian lokal.",
    image: "https://placehold.co/800x600/059669/ffffff?text=Bumi+Berkah+Branding",
    dataAlt: "Brand identity mockup for agriculture cooperative",
    features: [
      "Desain Logo Modern & Filosofis",
      "Panduan Brand Guidelines Lengkap",
      "Desain Kemasan Produk Beras & Kopi",
      "Template Media Sosial untuk Edukasi"
    ],
    detailOverview: "Transformasi visual yang mengangkat nilai tradisional produk pertanian lokal menjadi komoditas siap bersaing di pasar modern."
  },
  {
    id: "p10",
    name: "Website Yayasan 'Cahaya Bunda'",
    category: "Web Dev",
    filterCategory: "Web Dev",
    description: "Website portal informasi dan platform donasi digital transparan untuk yayasan panti asuhan.",
    image: "https://placehold.co/800x600/3b82f6/ffffff?text=Website+Cahaya+Bunda",
    dataAlt: "Charity foundation website mockup",
    features: [
      "Laporan Transparansi Donasi Bulanan",
      "Integrasi Payment Gateway untuk Sedekah",
      "Galeri Kegiatan Anak Asuh",
      "Formulir Relawan & Pendaftaran Donatur Tetap"
    ],
    detailOverview: "Portal kebaikan yang memudahkan para donatur menyalurkan bantuan secara digital dengan laporan yang transparan dan akuntabel."
  },
  {
    id: "p11",
    name: "Redesign M-Banking 'Bank Daerah'",
    category: "UI/UX",
    filterCategory: "UI/UX",
    description: "Revamp antarmuka aplikasi mobile banking agar lebih ramah pengguna (user-friendly) untuk nasabah senior.",
    image: "https://placehold.co/800x600/f59e0b/000000?text=M-Banking+Mockup",
    dataAlt: "Mobile banking app mockup UI design",
    features: [
      "Penyesuaian Kontras Warna & Ukuran Font Tinggi",
      "Penyederhanaan Alur Transfer Dana",
      "Fitur Akses Cepat Transaksi Rutin",
      "Panduan Interaktif Pengguna Baru (Onboarding)"
    ],
    detailOverview: "Desain ulang berpusat pada pengguna (user-centered) untuk memecahkan kendala teknis nasabah lansia saat bertransaksi digital."
  },
  {
    id: "p12",
    name: "Dashboard Ekspedisi 'KirimCepat'",
    category: "UI/UX",
    filterCategory: "UI/UX",
    description: "Eksplorasi desain dashboard logistik komprehensif untuk pelacakan armada pengiriman.",
    image: "https://placehold.co/800x600/ef4444/ffffff?text=Logistik+Dashboard",
    dataAlt: "Logistics tracking dashboard web UI mockup",
    features: [
      "Peta Interaktif Pelacakan Armada Live",
      "Sistem Peringatan Keterlambatan Rute",
      "Analitik Performa Kurir Harian",
      "Tampilan Mode Terang & Gelap Fleksibel"
    ],
    detailOverview: "Kerangka UI/UX tingkat lanjut untuk memfasilitasi tim operasional logistik dalam memantau ribuan paket secara waktu nyata tanpa kewalahan."
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "lp-basic",
    name: "Landing Page Basic",
    description: "Sangat representatif untuk profil bisnis, personal branding, atau peluncuran produk baru secara digital.",
    price: "Rp 300K - 850K",
    features: [
      "1 Halaman Informasi Utama (Statik)",
      "Profil Usaha & Deskripsi Layanan",
      "Galeri Dokumentasi & Testimoni",
      "Integrasi Peta Lokasi Google Maps",
      "Tombol WhatsApp & Tautan Bio Sosial"
    ],
    ctaText: "Pilih Paket"
  },
  {
    id: "catalog-umkm",
    name: "Katalog Online UMKM",
    description: "Media etalase digital untuk menampilkan produk Anda secara mendetail tanpa potongan biaya pihak ketiga.",
    price: "Rp 500K - 1.5Jt",
    isPopular: true,
    features: [
      "Kapasitas 5 hingga 30 Produk",
      "Kategorisasi & Informasi Harga Jelas",
      "Detail Deskripsi & Galeri Foto",
      "Pemesanan Langsung via WhatsApp",
      "Kemudahan Distribusi dengan Satu Tautan"
    ],
    ctaText: "Pilih Paket"
  },
  {
    id: "realtime-profile",
    name: "Company Profile & Realtime DB",
    description: "Meningkatkan kepercayaan klien profesional lewat website interaktif dengan database tersinkronisasi.",
    price: "Rp 800K - 2Jt",
    features: [
      "Integrasi Realtime Database",
      "Struktur Informasi & Layanan Lengkap",
      "Daftar Rekanan & Portofolio Klien",
      "Halaman Informasi Umum (FAQ) & Kontak",
      "Konsultasi Terintegrasi WhatsApp"
    ],
    ctaText: "Pilih Paket"
  },
  {
    id: "pos-app",
    name: "POS & Aplikasi Bisnis",
    description: "Kelola operasional, transaksi kasir, dan pantau stok inventaris secara digital melalui Web atau Android.",
    price: "Rp 800K - 2Jt",
    features: [
      "Autentikasi Akun Admin yang Aman",
      "Pencatatan Stok & Manajemen Produk",
      "Modul Kasir & Pencatatan Transaksi",
      "Laporan Penjualan & Ekspor Data",
      "Kustomisasi Alur Kerja Bisnis Anda"
    ],
    ctaText: "Pilih Paket"
  },
  {
    id: "custom-app",
    name: "Custom Web & Mobile App",
    description: "Pengembangan sistem berskala khusus untuk operasional perusahaan maupun prototipe penelitian akademik/skripsi.",
    price: "Mulai Rp 800K",
    features: [
      "Pengembangan Eksklusif dari Awal",
      "Skema Biaya Fleksibel & Transparan",
      "Implementasi Fitur Sesuai Spesifikasi",
      "Konsultasi Struktur & Arsitektur Kode",
      "Cocok untuk Tugas Akhir & Studi Kasus"
    ],
    ctaText: "Hubungi Kami",
    hasDottedBg: true
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "s1",
    title: "Web & App Development",
    description: "Pengembangan sistem web korporasi, landing page, katalog niaga elektronik (e-commerce), hingga aplikasi Android dengan standar performa industri yang andal.",
    type: "large"
  },
  {
    id: "s2",
    title: "Sistem Kasir (POS)",
    description: "Solusi aplikasi kasir digital terintegrasi untuk pembukuan transaksi harian, manajemen inventori barang, serta laporan penjualan otomatis guna efisiensi usaha.",
    type: "small-light",
    badges: ["Web/Android", "Database"]
  },
  {
    id: "s3",
    title: "Akademik & Research",
    description: "Asistensi teknis pembuatan perangkat lunak, prototipe koding, dan pengerjaan program terstruktur untuk tugas perkuliahan, penelitian, skripsi, maupun tesis.",
    type: "small-dark",
    iconName: "book-open"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "t1",
    quote: "Desainnya unik dan sangat merepresentasikan brand kami. Penjualan lewat website meningkat pesat sejak launching.",
    name: "Budi Santoso",
    role: "Owner, Kopi Senja",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSitddjzrZNFWm-BwBTY7h1wH7R57d0AXHF7fSeF_SvJQNcDxYBcnq0t4lX0wDUZ-OzQ4Dast30G0OrTlT3QkRn2INBAlKo8v-znHuog0Bbsxyxmk9JuX8NxB_EZHw963kWS8wixf1-brWrOVfWLeUoETYD5HK7l2inn4Die4xLw4zwPg5oego24CL0_Y4LKNYv8Cyqv6HVCfWmYNRyaGmd-F7Nb6lcn75X8b9URx4_tu_nu76WXZRNckRp7rbfNmgnfFIYxrDhLI"
  },
  {
    id: "t2",
    quote: "Timnya responsif dan pengerjaannya on-time. Gaya Neo-Brutalis-nya bikin web bengkel kami stand out banget.",
    name: "Anton Wijaya",
    role: "Founder, TechRepair",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAR5pcviXWBa3ykLfV4LxEgIOMeza-ub1SUZ3c4sEgTFDeKMPd6EEKKCd55RltiLBXcjFgQTWPJGQCTkQ7YHvwfm5kpaR9QeItAAfy2WTOf5j89zUij4c1UstJaBxyUJH-q9PUdxTHKQHgH0l2y0sMLi36OgyED57Ur-SYGe5kZWku_dLaxSP6yI_4SzLn-QLPk2rOyDLYhmpQzLTsGAicLz7IPQjAeDa1CtvGWDYVgvDQBaWVQfnuAMRLbCpA1VcZpcdNcVOivl2A"
  },
  {
    id: "t3",
    quote: "Bukan cuma bagus dilihat, tapi e-commerce-nya lancar. Konsumen pada bilang gampang banget belanja di web baru.",
    name: "Siti Aminah",
    role: "CEO, BoutiqueKu",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKL-DgU5BPSgrtWWXWhqtmBFrBcj_RVhKsUZJtKYHCq9owabI_quMa9AChKmh2JjesvhqwrXNYmCsee2nn7KlOqar25m2pcI-zg459YIzEv-0NPW3YsKoK5JizhWBblPfMmBI2cV0xjrX87HRrqCBWS7DlL0HAW5qdWWCDdze5ubF_5TxmzZ7xt0qbK_Gq1MmanQjmdgSQluY27n0EFSCI356ee1OlZIlEUClxNfArEo4h6ZjWxB9GSuGw_zwqYCOn4DwGk5kMIR8"
  }
];

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    category: "1. UMUM & LAYANAN",
    question: "Apa itu Ovixy Digital?",
    answer: "Ovixy Digital adalah studio pembuatan website, katalog online, dan aplikasi bisnis sederhana yang dirancang khusus untuk membantu UMKM serta pelaku jasa lokal naik kelas. Kami fokus membuat bisnis Anda terlihat profesional di internet melalui halaman online yang rapi, cepat, dan mudah dibagikan kepada calon pelanggan."
  },
  {
    id: "faq-2",
    category: "1. UMUM & LAYANAN",
    question: "Bisnis saya bergerak di bidang kuliner/laundry/jasa, paket mana yang paling cocok?",
    answer: "• Untuk Jasa Lokal (Laundry, Salon, Kontraktor, Wedding): Paket 1 (Landing Page Basic Static) sangat cocok untuk menampilkan daftar harga, profil, testimoni, dan lokasi Google Maps.\n\n• Untuk Kuliner / Online Shop Kecil: Paket 2 (Katalog Online UMKM) adalah pilihan terbaik karena produk Anda akan tertata rapi lengkap dengan tombol order WhatsApp langsung per produk.\n\n• Untuk Bisnis yang Sering Ganti Menu/Stok: Paket 3 (Realtime Database) sangat direkomendasikan karena Anda bisa mengubah data sesuka hati secara mandiri."
  },
  {
    id: "faq-3",
    category: "1. UMUM & LAYANAN",
    question: "Apakah saya harus paham koding atau teknologi untuk punya website ini?",
    answer: "Sama sekali tidak perlu. Seluruh proses pembuatan, koding, hingga website siap pakai akan ditangani sepenuhnya oleh tim Ovixy Digital. Anda hanya perlu menyiapkan bahan informasi bisnis Anda saja."
  },
  {
    id: "faq-4",
    category: "2. BIAYA, DOMAIN, & HOSTING",
    question: "Apakah ada biaya bulanan atau tahunan yang mahal setelah website selesai?",
    answer: "Tidak ada biaya wajib dari kami. Untuk website statik (Paket 1 & 2) dan website dinamis (Paket 3), kami menggunakan infrastruktur cloud modern yang gratis selamanya untuk kapasitas UMKM. Satu-satunya biaya berkala hanyalah perpanjangan domain murah Anda setiap tahun."
  },
  {
    id: "faq-5",
    category: "2. BIAYA, DOMAIN, & HOSTING",
    question: "Apakah harga paket sudah termasuk domain .com?",
    answer: "Demi menjaga harga jasa tetap ekonomis dan ramah di kantong bisnis kecil, paket awal kami tidak menggunakan domain .com yang biaya tahunannya cukup mahal. Sebagai gantinya, kami memberikan opsi subdomain gratis (contoh: namabisnis.ovixy.id) atau menyarankan penggunaan domain lokal super murah seperti .my.id atau .biz.id yang biayanya hanya berkisar Rp12.000 – Rp15.000 saja per tahun. Jika Anda tetap menginginkan domain .com, Anda cukup membayar biaya tambahan lisensi domain tersebut."
  },
  {
    id: "faq-6",
    category: "2. BIAYA, DOMAIN, & HOSTING",
    question: "Bagaimana jika di kemudian hari saya ingin mengubah harga atau menambah produk?",
    answer: "Jika Anda mengambil Paket 3 (Company Profile & Realtime DB), kami akan mengintegrasikan sistem basis data (database) dinamis yang sangat mudah dikelola langsung dari dasbor web atau ponsel Anda. Rekomendasi database yang paling tepat dan efisien akan kami diskusikan lebih lanjut saat sesi brief. Jika Anda mengambil paket statik, Anda dapat menggunakan jasa pemeliharaan (maintenance) berkala dari kami dengan biaya ekonomis."
  },
  {
    id: "faq-7",
    category: "3. ALUR KERJA & KETENTUAN REVISI",
    question: "Bagaimana alur proses pembuatan website dari awal sampai selesai?",
    answer: "Kami menerapkan 6 tahapan kerja terstruktur:\n\n1. Brief & Scope Kerja: Diskusi mengenai target bisnis dan kebutuhan fitur.\n2. Kumpul Bahan: Pengiriman logo, foto produk/layanan, daftar harga, dan kontak.\n3. Struktur & Wireframe: Penyusunan tata letak halaman agar rapi.\n4. Design & Unlimited Revision: Proses desain visual. Anda mendapatkan revisi desain tanpa batas sebelum tahap koding dimulai.\n5. Development (Koding): Proses pemrograman menggunakan teknologi terbaru.\n6. Launch: Website diuji coba, lolos fungsi, lalu resmi diunggah ke internet."
  },
  {
    id: "faq-8",
    category: "3. ALUR KERJA & KETENTUAN REVISI",
    question: "Berapa lama waktu pengerjaannya?",
    answer: "Waktu pengerjaan standar adalah 3 hingga 7 hari kerja. Durasi ini dihitung setelah seluruh bahan (foto produk, logo, teks, dan daftar harga) kami terima secara lengkap dari Anda."
  },
  {
    id: "faq-9",
    category: "3. ALUR KERJA & KETENTUAN REVISI",
    question: "Berapa kali saya bisa meminta revisi atau perbaikan desain?",
    answer: "Kami memberikan kebebasan revisi desain tanpa batas (unlimited) pada tahap perencanaan sebelum proses koding (development) dimulai. Setelah spesifikasi dan desain disepakati, lalu masuk ke tahap koding, revisi dibatasi maksimal 1-2 kali saja (kecuali ada penyesuaian pada MVP atau fitur utama) agar proses development berjalan efisien dan peluncuran tepat waktu."
  },
  {
    id: "faq-10",
    category: "4. INTEGRASI & FITUR TEKNIS",
    question: "Bagaimana cara sistem pemesanan WhatsApp di website bekerja?",
    answer: "Website Anda akan terintegrasi langsung dengan WhatsApp Business Anda. Ketika calon pembeli mengeklik tombol order atau konsultasi, sistem akan otomatis membuka chat WhatsApp Anda dengan format teks otomatis (Contoh: \"Halo Ovixy, saya ingin memesan Paket [Nama Produk] seharga [Harga]\"). Anda tidak perlu mengetik ulang pesanan dan tinggal melayani pembayarannya saja."
  },
  {
    id: "faq-11",
    category: "4. INTEGRASI & FITUR TEKNIS",
    question: "Apakah form kontak di website benar-benar berfungsi mengirim pesan?",
    answer: "Ya, betul. Form \"Kirim Pesan\" pada website kami dikonfigurasi secara langsung untuk mengirimkan notifikasi pesan dan data pelanggan langsung masuk ke dalam inbox Email bisnis Anda secara instan tanpa perlu backend yang rumit."
  }
];

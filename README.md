# Portofolio Pribadi - Vilary Aldino Egrea, S.Kom.

Website portofolio pribadi modern berbentuk **Single-Page Application (SPA)** yang responsif, cepat, dan ringan. Dibangun menggunakan arsitektur murni **HTML5, CSS3, dan Vanilla JavaScript (ES6+)** tanpa ketergantungan *package manager* (Node.js/npm), sehingga siap dipublikasikan langsung ke **GitHub Pages** atau server lokal (**XAMPP**).

---

## 🌟 Fitur Utama

- ⚡ **Lightweight & High Performance**: 100% Vanilla Web Stack tanpa dependensi bundler atau framework eksternal yang membebani loading.
- 🌓 **Mode Gelap & Terang (Dark/Light Mode)**: Tersedia tombol switch tema tampilan yang tersimpan otomatis di `localStorage`.
- 📱 **Mobile-First & Responsif**: Tampilan dirancang adaptif untuk semua layar (Ponsel, Tablet, Laptop, hingga Desktop monitor lebar).
- 🎨 **Modern UI/UX**: Sentuhan Glassmorphism, animasi ambient glow, scroll reveal interaktif, dan efek hover yang halus.
- 📜 **ScrollSpy & Smooth Navigation**: Navigasi sticky otomatis menandai section yang sedang aktif saat digulir.
- 💼 **Interactive Project Showcase**: Galeri proyek dilengkapi pop-up modal interaktif untuk melihat detail arsitektur teknis dan fitur kunci.
- 💬 **Formulir Kontak Dual-Channel**: Pengunjung dapat memilih untuk mengirim pesan secara langsung melalui **WhatsApp API** atau membuka aplikasi **Email Client** mereka.
- 📋 **One-Click Copy**: Tombol satu klik untuk menyalin alamat email dan nomor telepon langsung ke clipboard dengan notifikasi toast.

---

## 📁 Struktur Direktori

```text
MyPortofolio/
│
├── index.html          # Struktur semantik HTML5 utama & meta tag SEO
├── css/
│   └── style.css       # Design tokens, CSS variables, layout grid/flexbox, animasi
├── js/
│   └── main.js         # Controller Vanilla JS (Theme toggle, ScrollSpy, Modal, Toast, Form)
└── README.md           # Panduan penggunaan & deployment
```

---

## 🚀 Cara Menjalankan

### Cara 1: Langsung di Browser (Paling Mudah)
Cukup klik ganda (double click) pada file `index.html` di file explorer Anda, atau seret file tersebut ke browser favorit Anda (Chrome, Edge, Firefox, Safari).

### Cara 2: Menggunakan XAMPP Apache
Karena folder ini berada di `c:\xampp\htdocs\MyPortofolio`:
1. Buka aplikasi **XAMPP Control Panel**.
2. Klik tombol **Start** pada modul **Apache**.
3. Buka browser dan kunjungi alamat:
   ```text
   http://localhost/MyPortofolio
   ```

---

## 🌐 Cara Publikasi ke GitHub Pages

1. **Inisialisasi Git dan Commit**:
   Buka terminal di folder `MyPortofolio`:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release portfolio website Vilary Aldino Egrea"
   ```

2. **Buat Repositori di GitHub**:
   - Beri nama misalnya `portofolio` atau `<username>.github.io`.
   - Hubungkan remote origin:
     ```bash
     git branch -M main
     git remote add origin https://github.com/<username>/<nama-repo>.git
     git push -u origin main
     ```

3. **Aktifkan GitHub Pages**:
   - Buka menu **Settings** > **Pages** di repositori GitHub Anda.
   - Pada bagian **Build and deployment** > **Source**, pilih **Deploy from a branch**.
   - Pilih branch `main` dan folder `/ (root)`.
   - Klik **Save**. Dalam hitungan detik website portofolio Anda telah aktif dan dapat diakses publik!

---

## 👤 Biodata & Kontak Pengembang

- **Nama**: Vilary Aldino Egrea, S.Kom.
- **Pendidikan**: S1 Informatika - Universitas Muhammadiyah Sidoarjo (IPK 3.90)
- **Sertifikasi**: Junior Network Administrator (BNSP 2026)
- **Email**: [vilaryaldino@gmail.com](mailto:vilaryaldino@gmail.com)
- **WhatsApp**: [+62 857-0641-128](https://wa.me/628570641128)
- **GitHub**: [github.com/vilaryaldino](https://github.com/vilaryaldino)
- **LinkedIn**: [linkedin.com/in/vilaryaldino](https://linkedin.com/in/vilaryaldino)


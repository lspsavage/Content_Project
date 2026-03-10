# Boston Housing Price Analysis - Project Showcase

[![Live Demo](https://img.shields.io/badge/Live-Demo-cyan?style=for-the-badge)](https://lspsavage.github.io/DataAnalyst_boston-house-price/)

Ini adalah halaman web showcase untuk proyek analisis data **"Boston Housing Price Analysis"**. Halaman ini dibuat untuk menyajikan hasil dan metodologi proyek secara interaktif dan menarik. Proyek ini sendiri merupakan salah satu konten yang ditampilkan di [halaman portofolio utama](https://lspsavage.github.io/My_porto/page_project.html).

![Dashboard Power BI](https://raw.githubusercontent.com/lspsavage/DataAnalyst_boston-house-price/main/image/dashboard.png)

## 📝 Ringkasan Proyek Analisis Data

Proyek ini bertujuan untuk melakukan analisis eksploratif dan membangun model prediksi harga rumah di Boston berdasarkan berbagai faktor sosial, ekonomi, dan lingkungan.

- **Dataset:** [Boston House Prices di Kaggle](https://www.kaggle.com/datasets/vikrishnan/boston-house-prices/data)
- **Tujuan:** Memeriksa pengaruh variabel seperti tingkat kejahatan (`CRIM`), jumlah kamar (`RM`), rasio murid-guru (`PTRATIO`), dan pajak (`TAX`) terhadap nilai properti.

### ❓ Pertanyaan Penelitian

1.  Faktor apa saja yang paling berpengaruh terhadap harga rumah di Boston?
2.  Apakah tingkat kejahatan (CRIM) berpengaruh negatif terhadap harga rumah?
3.  Apakah rasio murid-guru (PTRATIO) berkorelasi dengan harga rumah?
4.  Apakah kedekatan dengan Sungai Charles (CHAS) berdampak signifikan terhadap harga rumah?
5.  Apakah rumah di area dengan pajak tinggi (TAX) memiliki harga jual lebih rendah?

### 💡 Hasil Akhir & Insight

Harga rumah paling dipengaruhi oleh jumlah kamar, tingkat kejahatan, dan rasio murid-guru. Penghapusan outlier terbukti meningkatkan performa model secara signifikan, yang ditandai dengan menurunnya nilai error dan membaiknya kemampuan prediksi.

## ✨ Fitur Halaman Showcase

Halaman web ini dibangun dengan teknologi modern untuk memberikan pengalaman pengguna yang baik:

- **Latar Belakang Interaktif:** Partikel bergerak yang merespons gerakan mouse, dibuat dengan `tsParticles`.
- **Efek Visual Modern:** Efek _glow_ pada kursor dan kartu saat di-hover.
- **Desain Responsif:** Tampilan yang optimal di berbagai perangkat, dari desktop hingga mobile, menggunakan Tailwind CSS.
- **Navigasi Intuitif:** Dilengkapi tombol kembali dan menu hamburger di tampilan mobile.

## 🛠️ Teknologi yang Digunakan

### Frontend Showcase

- **HTML5**
- **Tailwind CSS**
- **JavaScript**
- **tsParticles.js** untuk animasi partikel.

### Proyek Analisis Data (Asli)

- **Python**
- **Pandas** untuk manipulasi data.
- **Seaborn** untuk visualisasi data.
- **Scikit-learn** untuk membangun model regresi linear.
- **Power BI** untuk membuat dashboard interaktif.

## 🚀 Menjalankan Proyek Secara Lokal

Untuk menjalankan halaman web ini di komputer Anda:

1.  **Clone repositori ini:**

    ```bash
    git clone https://github.com/lspsavage/DataAnalyst_boston-house-price.git
    cd DataAnalyst_boston-house-price
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Build file CSS dari Tailwind:**
    _(Catatan: Pastikan Anda memiliki file input CSS, misalnya di `src/input.css`)_

    ```bash
    npm run build
    ```

    _Untuk pengembangan, Anda bisa menggunakan `npm run watch` agar perubahan pada CSS langsung diterapkan._

4.  **Buka `index.html`:**
    Buka file `index.html` di browser pilihan Anda.

---

Dibuat sebagai bagian dari portofolio proyek oleh lspsavage.

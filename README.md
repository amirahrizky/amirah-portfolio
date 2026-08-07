# Amirah Rizky Ramadhanti — Portfolio

Portofolio pribadi dengan gaya visual **Claymorphism**, dibangun dengan **React** + **Vite** + **Framer Motion**, berisi ringkasan profil, pengalaman kerja, organisasi & volunteer, publikasi ilmiah, skill, pendidikan, dan kontak — diambil dari CV.

## Menjalankan proyek

Pastikan Node.js versi 18 ke atas sudah terpasang, lalu jalankan di terminal:

```bash
npm install
npm run dev
```

Buka `http://localhost:5173` di browser.

## Build untuk produksi

```bash
npm run build
npm run preview
```

Hasil build ada di folder `dist/`.

## Struktur proyek

```
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css              # design system claymorphism (warna, shadow, tipografi)
    ├── data/
    │   └── portfolioData.js   # seluruh konten CV — edit di sini untuk update konten
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Organizations.jsx
        ├── Publications.jsx
        ├── Skills.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Mengubah konten

Semua data (nama, pengalaman, publikasi, skill, dsb.) terpusat di `src/data/portfolioData.js`, jadi cukup edit file itu tanpa menyentuh komponen.

## Mengubah warna/tema

Semua token warna & shadow claymorphism ada di bagian `:root` pada `src/index.css`.

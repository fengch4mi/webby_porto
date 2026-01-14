# Portfolio React - Hafizh Alexander

Portofolio website yang dibangun dengan React, menampilkan karya desain grafis, UI/UX projects, dan pengalaman profesional.

## 🚀 Fitur Utama

- **Single Page Application (SPA)** - Navigasi lancar tanpa reload halaman
- **Multi-bahasa** - Support Bahasa Indonesia & English dengan i18next
- **API Integration** - Data portfolio dimuat secara dinamis via API
- **Responsive Design** - Optimal di semua ukuran layar
- **Smooth Animations** - Marquee scrolling, carousel, floating effects

## 📋 Teknologi

- **React 19** - UI Library
- **React Router DOM** - Routing & Navigation
- **i18next** - Internationalization
- **Vite** - Build tool & dev server
- **CSS3** - Styling dengan animations

## 🛠️ Instalasi

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev

# Build untuk production
npm run build

# Preview production build
npm run preview
```

## 📁 Struktur Project

```
portfolio-react/
├── public/
│   ├── images/          # Semua gambar portfolio
│   └── font/            # Font FreeSans
├── src/
│   ├── api/             # Mock API untuk data
│   ├── components/      # Komponen reusable
│   │   ├── Header.jsx
│   │   ├── Carousel.jsx
│   │   └── BackgroundCircles.jsx
│   ├── pages/           # Halaman utama
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Portfolio.jsx
│   ├── locales/         # Translation files
│   │   ├── id.json
│   │   └── en.json
│   ├── styles/          # Global styles
│   ├── utils/           # Utilities (i18n config)
│   └── App.jsx          # Main app component
└── package.json
```

## 🎨 Halaman

### Home
- Hero section dengan profile image
- CTA buttons (About & CV)
- Animated background circles

### About
- Profile section dengan statistik
- Experience timeline dengan data dari API
- Skills, expertise, software
- Education information

### Portfolio
- **Social Media Designs** - Grid dengan marquee animation
- **UI/UX Projects** - Hero dengan overlapping images & carousel
- **Personal Works** - Mixed grid layout

## 🌐 Fitur Terjemahan

Klik tombol **ID/EN** di header untuk mengganti bahasa.

Semua konten (navigasi, judul, deskripsi) otomatis ter-translate.

## 📱 Responsive Breakpoints

- Desktop: > 900px
- Tablet: 600px - 900px
- Mobile: < 600px

## 🔗 Links

- CV: [Google Drive](https://drive.google.com/file/d/1wXZAM1c8SWobq5XRCozAcdV1GwRgRyeJ/view?usp=sharing)

## 👤 Developer

**Hafizh Alexander**
- Freelance Graphic Designer
- UI/UX Designer
- Informatics Student at Surabaya State University

---

Built with ❤️ using React + Vite

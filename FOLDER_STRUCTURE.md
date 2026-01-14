# Struktur Folder - Portfolio Web

## 📁 Folder Root (webby_porto/)

Folder ini berisi **2 versi** portfolio website:

### 1. **HTML Version (Original)** - Files di Root
```
webby_porto/
├── index.html              ← Home page (HTML)
├── aboutme.html            ← About page (HTML)
├── portfolio.html          ← Portfolio page (HTML)
├── home.css                ← Styling untuk home
├── aboutme.css             ← Styling untuk about
├── style.css               ← Styling untuk portfolio
├── images/                 ← Gambar original
├── font/                   ← Font files
├── js/                     ← JavaScript files
├── postcss.config.js.old   ← Config lama (disabled)
└── tailwind.config.js.old  ← Config lama (disabled)
```

**Status**: ✅ Original website, preserved untuk backup/reference

---

### 2. **React Version (New)** - Folder `portfolio-react/`
```
portfolio-react/
├── public/
│   ├── images/             ← Copy semua images
│   └── font/               ← Copy semua fonts
├── src/
│   ├── api/                ← Mock API untuk data
│   ├── components/         ← React components
│   ├── pages/              ← Halaman utama
│   ├── locales/            ← Translation files (ID/EN)
│   ├── styles/             ← Global CSS
│   ├── utils/              ← Utilities (i18n)
│   ├── App.jsx             ← Main app
│   └── main.jsx            ← Entry point
├── package.json            ← Dependencies
├── vite.config.js          ← Vite config
├── README_PROJECT.md       ← Documentation
└── GUIDE.md                ← Usage guide
```

**Status**: ✅ New React SPA, production-ready

---

## 🎯 Penggunaan

### Untuk HTML Version (Original):
1. Buka file HTML langsung di browser
2. Atau gunakan live server
```bash
# Dari folder root
npx serve .
```

### Untuk React Version (NEW):
```bash
# Development
cd portfolio-react
npm run dev
# → http://localhost:5173

# Production Build
npm run build
npm run preview
```

---

## 🗑️ Cara Rapih Folder (Opsional)

Jika ingin pisahkan kedua versi:

### Option 1: Archive HTML Version
```bash
# Dari folder webby_porto/
mkdir html-version
move *.html html-version/
move *.css html-version/
move js html-version/
```

### Option 2: Buat Folder Terpisah
```
webby_porto/
├── html-original/          ← Pindahkan HTML files kesini
└── portfolio-react/        ← React version (tetap disini)
```

### Option 3: Delete HTML Version (Setelah yakin React OK)
```bash
# ⚠️ HATI-HATI: Ini akan hapus permanent
del *.html
del *.css
rmdir /s js
```

---

## ✅ Rekomendasi

**KEEP BOTH versions untuk sementara**:
- HTML version → backup/fallback
- React version → untuk production

Setelah React version stable dan deployed, baru bisa delete HTML version.

---

## 🔧 File yang Diubah/Disable

Files ini di-rename jadi `.old` karena conflict dengan React:
- `postcss.config.js` → `postcss.config.js.old`
- `tailwind.config.js` → `tailwind.config.js.old`

**Alasan**: Vite di folder React me-load config dari parent folder dan error karena Tailwind tidak terinstall di React project.

**Solusi**: Files di-disable, React project jalan normal tanpa Tailwind.

---

## 📊 Summary

| Aspect | HTML Version | React Version |
|--------|-------------|---------------|
| Location | Root folder | `/portfolio-react` |
| Tech | HTML, CSS, JS | React, Router, i18next |
| Features | Static | SPA + i18n + API |
| Status | Original/Backup | New/Production |
| Server Needed | No (or simple) | Yes (Vite) |

---

Semua sudah rapi! Portfolio React siap digunakan! 🚀

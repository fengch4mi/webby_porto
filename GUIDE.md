# Panduan Penggunaan Portfolio React

## 🎯 Cara Menjalankan Aplikasi

### Development Mode
```bash
cd portfolio-react
npm install
npm run dev
```

Aplikasi akan berjalan di: `http://localhost:5173`

### Production Build
```bash
npm run build
npm run preview
```

## 🎨 Customization

### Mengganti Konten

#### 1. Informasi Personal (About Page)
Edit file: `src/api/portfolioAPI.js`

```javascript
getExperience: () => {
  // Tambah/edit experience disini
}
```

#### 2. Translation/Bahasa
Edit files:
- `src/locales/id.json` - Bahasa Indonesia
- `src/locales/en.json` - English

#### 3. Mengganti Gambar
- Letakkan gambar di folder `public/images/`
- Update path di `portfolioAPI.js`:

```javascript
getSocialMediaDesigns: () => {
  row1: [
    { src: "/images/your-image.png", alt: "Description" }
  ]
}
```

#### 4. Menambah Halaman Baru
1. Buat file baru di `src/pages/NewPage.jsx`
2. Tambahkan route di `src/App.jsx`:
```javascript
<Route path="/new-page" element={<NewPage />} />
```
3. Tambahkan link di Header

### Styling

CSS Files structure:
- `src/styles/global.css` - Global styles
- `src/pages/*.css` - Page-specific styles
- `src/components/*.css` - Component styles

### Mengganti Warna

Temukan dan replace warna di CSS files:
- Primary gray: `rgba(120, 120, 120, 0.9)`
- Background: `#f5f5f5`, `#E8E5D9`, `#CCC8AA`
- Text: `#333`, `#555`, `#666`

## 🌐 Multi-language Setup

Default language: Indonesian (id)

Untuk menambah bahasa baru:
1. Buat file `src/locales/[lang-code].json`
2. Copy struktur dari `id.json`
3. Translate semua text
4. Update `src/utils/i18n.js`:

```javascript
import newLang from '../locales/new-lang.json';

resources: {
  id: { translation: id },
  en: { translation: en },
  'new-lang': { translation: newLang }
}
```

5. Tambah button di Header component

## 📊 API Integration

Saat ini menggunakan Mock API (data hardcoded).

### Untuk Real API:

Edit `src/api/portfolioAPI.js`:

```javascript
import axios from 'axios';

export const portfolioAPI = {
  getExperience: async () => {
    const response = await axios.get('YOUR_API_URL/experience');
    return response.data;
  }
}
```

### Environment Variables

Buat file `.env`:
```
VITE_API_URL=https://your-api.com
```

Gunakan di code:
```javascript
const API_URL = import.meta.env.VITE_API_URL;
```

## 🚀 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload folder 'dist' ke Netlify
```

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Update `package.json`:
```json
{
  "homepage": "https://username.github.io/repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Deploy: `npm run deploy`

## 🐛 Troubleshooting

### Images tidak muncul
- Pastikan gambar ada di `public/images/`
- Check path dimulai dengan `/images/` bukan `./images/`

### Routing error di production
Tambahkan `_redirects` file di `public/`:
```
/*    /index.html   200
```

### Font tidak load
- Check font files di `public/font/`
- Verify @font-face path di `global.css`

## 📝 Best Practices

1. **Performance**
   - Optimize images (compress, use WebP)
   - Lazy load components
   - Code splitting untuk pages besar

2. **SEO**
   - Add meta tags di `index.html`
   - Use semantic HTML
   - Add alt text untuk semua images

3. **Accessibility**
   - ARIA labels untuk buttons
   - Keyboard navigation support
   - Color contrast ratios

## 🔧 Development Tips

### Hot Module Replacement
Vite supports HMR - changes akan auto-reload

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Prettier
- ESLint

### Debugging
```javascript
// Add di component
console.log('Debug:', data);

// Or use React DevTools browser extension
```

## 📞 Support

Jika ada masalah atau pertanyaan:
1. Check browser console untuk errors
2. Verify semua dependencies installed
3. Clear node_modules dan reinstall: `rm -rf node_modules && npm install`
4. Check Vite documentation: https://vitejs.dev/

---

Happy Coding! 🎉

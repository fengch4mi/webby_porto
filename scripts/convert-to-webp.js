import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';

const PUBLIC_IMAGES_DIR = './public/images';
const QUALITY = 80; // WebP quality (0-100)

async function convertImage(inputPath, outputPath) {
  try {
    const ext = extname(inputPath).toLowerCase();
    const isPng = ext === '.png';
    
    // For PNG, preserve alpha channel (transparency)
    const webpOptions = isPng 
      ? { quality: QUALITY, alphaQuality: 100, lossless: false }
      : { quality: QUALITY };
    
    await sharp(inputPath)
      .webp(webpOptions)
      .toFile(outputPath);
    
    const inputStats = await stat(inputPath);
    const outputStats = await stat(outputPath);
    const savings = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
    
    console.log(`✓ ${basename(inputPath)} → ${basename(outputPath)} (${savings}% smaller)${isPng ? ' [transparency preserved]' : ''}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${inputPath}:`, error.message);
  }
}

async function convertImagesInDirectory(dir) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = join(dir, entry.name);
      
      if (entry.isDirectory()) {
        await convertImagesInDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = extname(entry.name).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const outputPath = fullPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
          await convertImage(fullPath, outputPath);
        }
      }
    }
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

console.log('🖼️  Converting images to WebP format...\n');
convertImagesInDirectory(PUBLIC_IMAGES_DIR)
  .then(() => console.log('\n✅ All images converted!'))
  .catch(error => {
    console.error('❌ Conversion failed:', error);
    process.exit(1);
  });

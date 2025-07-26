import sharp from 'sharp';
import { readFileSync } from 'fs';

// Leer el SVG principal
const svgBuffer = readFileSync('public/favicon.svg');

console.log('🎨 Generando favicons ultra-minimales...');

// Generar favicon.ico de 32x32
await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toFile('public/favicon-32.png');

// Generar favicon de 192x192
await sharp(svgBuffer)
  .resize(192, 192)
  .png()
  .toFile('public/favicon-192.png');

// Generar favicon de 512x512
await sharp(svgBuffer)
  .resize(512, 512)
  .png()
  .toFile('public/favicon-512.png');

// Generar el ICO (usando la versión de 32x32)
const png32Buffer = await sharp(svgBuffer)
  .resize(32, 32)
  .png()
  .toBuffer();

// Para generar ICO usamos el PNG de 32x32
await sharp(png32Buffer)
  .resize(32, 32)
  .toFormat('png')
  .toFile('public/favicon.ico');

console.log('✅ Favicons ultra-minimales generados con éxito!');
console.log('📁 Archivos actualizados:');
console.log('   - favicon-32.png');
console.log('   - favicon-192.png'); 
console.log('   - favicon-512.png');
console.log('   - favicon.ico');
console.log('🎯 Diseño: Ultra-minimal con paleta monochrome');

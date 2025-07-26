import { readFileSync, writeFileSync } from 'fs';

// Para crear PNGs necesitarías usar una librería como canvas o sharp
// Por ahora, aquí está el código SVG optimizado para diferentes tamaños

// Favicon 192x192 - Ultra-minimal design
const favicon192 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none">
  <!-- Ultra-minimal background -->
  <rect width="192" height="192" rx="36" fill="#fafafa" stroke="#e5e5e5" stroke-width="3"/>
  
  <!-- Clean geometric logo -->
  <g transform="translate(96, 96)">
    <!-- Letter A as minimal geometric shape -->
    <path d="M-36 36 L0 -36 L36 36 M-18 9 L18 9" 
          stroke="#171717" 
          stroke-width="9" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          fill="none"/>
    
    <!-- Subtle accent dot -->
    <circle cx="0" cy="-48" r="4.8" fill="#737373"/>
  </g>
</svg>`;

// Favicon 512x512 - Ultra-minimal design
const favicon512 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <!-- Ultra-minimal background -->
  <rect width="512" height="512" rx="96" fill="#fafafa" stroke="#e5e5e5" stroke-width="8"/>
  
  <!-- Clean geometric logo -->
  <g transform="translate(256, 256)">
    <!-- Letter A as minimal geometric shape -->
    <path d="M-96 96 L0 -96 L96 96 M-48 24 L48 24" 
          stroke="#171717" 
          stroke-width="24" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          fill="none"/>
    
    <!-- Subtle accent dot -->
    <circle cx="0" cy="-128" r="12.8" fill="#737373"/>
  </g>
</svg>`;

console.log("📱 Creando versiones ultra-minimales del favicon...");
console.log("✨ Nuevo diseño monochrome listo!");
console.log("🎨 Estética: Ultra-minimal con paleta de grises");

export { favicon192, favicon512 };

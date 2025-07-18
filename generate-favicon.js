const fs = require('fs');
const path = require('path');

// SVG content for the new favicon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <!-- Background with gradient -->
  <rect width="32" height="32" rx="8" fill="url(#gradient1)"/>
  
  <!-- Code brackets -->
  <path d="M8 10L6 16L8 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <path d="M24 10L26 16L24 22" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  
  <!-- AI initials with modern font -->
  <text x="16" y="20" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" text-anchor="middle" fill="white">AI</text>
  
  <!-- Sparkle elements -->
  <circle cx="10" cy="8" r="1" fill="white" opacity="0.9"/>
  <circle cx="22" cy="24" r="1" fill="white" opacity="0.9"/>
  <circle cx="25" cy="8" r="0.5" fill="white" opacity="0.7"/>
  <circle cx="7" cy="24" r="0.5" fill="white" opacity="0.7"/>
  
  <!-- Small decorative dots -->
  <circle cx="12" cy="12" r="0.3" fill="white" opacity="0.6"/>
  <circle cx="20" cy="20" r="0.3" fill="white" opacity="0.6"/>
  
  <!-- Gradients -->
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#EC4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

// ICO content (simple version)
const icoSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#8B5CF6"/>
  <path d="M8 10L6 16L8 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <path d="M24 10L26 16L24 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
  <text x="16" y="20" font-family="Arial" font-size="10" font-weight="bold" text-anchor="middle" fill="white">AI</text>
  <circle cx="10" cy="8" r="1" fill="white"/>
  <circle cx="22" cy="24" r="1" fill="white"/>
</svg>`;

console.log("✨ Nuevo favicon creado!");
console.log("📁 Los archivos SVG están listos.");
console.log("🎨 Diseño: Iniciales 'AI' con brackets de código y gradiente purple-pink-blue");
console.log("✨ Elementos: Sparkles y decoraciones aesthetic");

// Mostrar información sobre los archivos
console.log("\n📂 Archivos de favicon actualizados:");
console.log("- favicon.svg (principal)");
console.log("- favicon-alt.svg (versión alternativa)");
console.log("\n🎯 Características del nuevo diseño:");
console.log("- Iniciales 'AI' destacadas");
console.log("- Brackets de código < > que reflejan tu profesión");
console.log("- Gradiente purple → pink → blue (tu paleta de colores)");
console.log("- Elementos sparkle aesthetic");
console.log("- Diseño minimalista y profesional");

// Para el ICO, podemos usar un diseño más simple
fs.writeFileSync('favicon-ico.svg', icoSvgContent);
console.log("\n✅ También se creó favicon-ico.svg para conversión a .ico");

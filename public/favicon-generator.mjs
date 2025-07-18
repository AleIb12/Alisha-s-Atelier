import { readFileSync, writeFileSync } from 'fs';

// Para crear PNGs necesitarías usar una librería como canvas o sharp
// Por ahora, aquí está el código SVG optimizado para diferentes tamaños

// Favicon 192x192
const favicon192 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" fill="none">
  <!-- Background with gradient -->
  <rect width="192" height="192" rx="48" fill="url(#gradient1)"/>
  
  <!-- Code brackets -->
  <path d="M48 60L36 96L48 132" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <path d="M144 60L156 96L144 132" stroke="white" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  
  <!-- AI initials with modern font -->
  <text x="96" y="120" font-family="system-ui, -apple-system, sans-serif" font-size="60" font-weight="700" text-anchor="middle" fill="white">AI</text>
  
  <!-- Sparkle elements -->
  <circle cx="60" cy="48" r="6" fill="white" opacity="0.9"/>
  <circle cx="132" cy="144" r="6" fill="white" opacity="0.9"/>
  <circle cx="150" cy="48" r="3" fill="white" opacity="0.7"/>
  <circle cx="42" cy="144" r="3" fill="white" opacity="0.7"/>
  
  <!-- Small decorative dots -->
  <circle cx="72" cy="72" r="2" fill="white" opacity="0.6"/>
  <circle cx="120" cy="120" r="2" fill="white" opacity="0.6"/>
  
  <!-- Gradients -->
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#EC4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

// Favicon 512x512
const favicon512 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <!-- Background with gradient -->
  <rect width="512" height="512" rx="128" fill="url(#gradient1)"/>
  
  <!-- Code brackets -->
  <path d="M128 160L96 256L128 352" stroke="white" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  <path d="M384 160L416 256L384 352" stroke="white" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" opacity="0.9"/>
  
  <!-- AI initials with modern font -->
  <text x="256" y="320" font-family="system-ui, -apple-system, sans-serif" font-size="160" font-weight="700" text-anchor="middle" fill="white">AI</text>
  
  <!-- Sparkle elements -->
  <circle cx="160" cy="128" r="16" fill="white" opacity="0.9"/>
  <circle cx="352" cy="384" r="16" fill="white" opacity="0.9"/>
  <circle cx="400" cy="128" r="8" fill="white" opacity="0.7"/>
  <circle cx="112" cy="384" r="8" fill="white" opacity="0.7"/>
  
  <!-- Small decorative dots -->
  <circle cx="192" cy="192" r="4" fill="white" opacity="0.6"/>
  <circle cx="320" cy="320" r="4" fill="white" opacity="0.6"/>
  <circle cx="448" cy="160" r="3" fill="white" opacity="0.5"/>
  <circle cx="64" cy="352" r="3" fill="white" opacity="0.5"/>
  
  <!-- Additional sparkles for high res -->
  <circle cx="440" cy="320" r="2" fill="white" opacity="0.4"/>
  <circle cx="72" cy="192" r="2" fill="white" opacity="0.4"/>
  
  <!-- Gradients -->
  <defs>
    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#EC4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3B82F6;stop-opacity:1" />
    </linearGradient>
  </defs>
</svg>`;

console.log("📱 Creando versiones de alta resolución del favicon...");
console.log("✨ SVG optimizados para diferentes tamaños listos!");

export { favicon192, favicon512 };

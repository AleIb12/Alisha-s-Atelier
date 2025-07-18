// Test script for EmailJS configuration
// Run with: node test-emailjs.js

const { EMAILJS_CONFIG } = require('./src/lib/emailjs-config.ts');

console.log('🧪 Testing EmailJS Configuration...\n');

// Check if all required values are set
const checks = [
  {
    name: 'Public Key',
    value: EMAILJS_CONFIG.PUBLIC_KEY,
    isValid: EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY_HERE'
  },
  {
    name: 'Service ID',
    value: EMAILJS_CONFIG.SERVICE_ID,
    isValid: EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID_HERE'
  },
  {
    name: 'Template ID',
    value: EMAILJS_CONFIG.TEMPLATE_ID,
    isValid: EMAILJS_CONFIG.TEMPLATE_ID !== 'YOUR_TEMPLATE_ID_HERE'
  }
];

let allConfigured = true;

checks.forEach(check => {
  const status = check.isValid ? '✅' : '❌';
  const value = check.isValid ? check.value : 'NOT CONFIGURED';
  console.log(`${status} ${check.name}: ${value}`);
  
  if (!check.isValid) {
    allConfigured = false;
  }
});

console.log('\n' + '='.repeat(50));

if (allConfigured) {
  console.log('🎉 EmailJS está configurado correctamente!');
  console.log('📧 Los emails se enviarán a: ibarrabelloalisha@gmail.com');
  console.log('🚀 Puedes probar el formulario de contacto.');
} else {
  console.log('⚠️  EmailJS necesita configuración.');
  console.log('📖 Lee las guías de configuración:');
  console.log('   - EMAIL_SETUP.md (configuración rápida)');
  console.log('   - EMAILJS_SETUP.md (guía detallada)');
}

console.log('\n📁 Archivos de configuración:');
console.log('   - src/lib/emailjs-config.ts');
console.log('   - .env.local (recomendado para credenciales)');
console.log('   - .env.example (plantilla de variables)');

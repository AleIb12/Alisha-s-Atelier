# 🚀 Configuración Rápida de EmailJS

## ⚡ Setup en 5 Minutos

### 1. Crear cuenta en EmailJS
- Ve a [emailjs.com](https://www.emailjs.com) → Sign Up

### 2. Configurar Gmail Service
- Email Services → Add New Service → Gmail
- Service ID: `gmail_service`
- Email: `ibarrabelloalisha@gmail.com`
- Password: [Crear contraseña de aplicación de Google]

### 3. Crear Template
- Email Templates → Create New Template
- Template ID: `portfolio_contact_template`
- Subject: `Nuevo mensaje desde tu portfolio - {{from_name}}`

### 4. Obtener Credenciales
- Integration → Copy Public Key
- Email Services → Copy Service ID
- Email Templates → Copy Template ID

### 5. Configurar en el Proyecto

**Opción A - Variables de Entorno (Recomendada):**
```bash
# Crear .env.local
cp .env.example .env.local
```

Editar `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=gmail_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=portfolio_contact_template
```

**Opción B - Hardcoded:**
Editar `src/lib/emailjs-config.ts`:
```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'tu_public_key_aquí',
  SERVICE_ID: 'gmail_service',
  TEMPLATE_ID: 'portfolio_contact_template',
};
```

### 6. Probar
```bash
npm run dev
```
Ve al formulario y envía un mensaje de prueba.

## 📧 Template HTML Básico

```html
<h2>Nuevo mensaje desde tu portfolio</h2>
<p><strong>De:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Mensaje:</strong></p>
<p>{{message}}</p>
```

## ✅ ¡Listo!

Ahora tu formulario envía emails reales a `ibarrabelloalisha@gmail.com`.

**Ver guía completa:** [EMAILJS_SETUP.md](./EMAILJS_SETUP.md)
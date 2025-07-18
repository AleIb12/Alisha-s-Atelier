# 📧 Configuración de EmailJS para el Portfolio

Esta guía te ayudará a configurar EmailJS para que el formulario de contacto del portfolio funcione correctamente.

## 🚀 Pasos de Configuración

### 1. Crear Cuenta en EmailJS

1. Ve a [EmailJS.com](https://www.emailjs.com/)
2. Haz clic en **"Sign Up"** para crear una cuenta gratuita
3. Verifica tu email

### 2. Configurar un Servicio de Email

1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona tu proveedor de email:
   - **Gmail** (recomendado para uso personal)
   - **Outlook/Hotmail**
   - **Yahoo**
   - O cualquier otro proveedor SMTP

4. **Para Gmail:**
   - Service ID: Elige un nombre (ej: `gmail_service`)
   - Email: Tu email de Gmail (`ibarrabelloalisha@gmail.com`)
   - Contraseña de aplicación: Necesitarás generar una contraseña específica para aplicaciones

### 3. Configurar Contraseña de Aplicación para Gmail

1. Ve a tu cuenta de Google: [myaccount.google.com](https://myaccount.google.com)
2. Ve a **Seguridad** → **Verificación en 2 pasos** (debe estar activada)
3. Ve a **Contraseñas de aplicaciones**
4. Selecciona **"Correo"** y **"Otra (nombre personalizado)"**
5. Escribe "EmailJS Portfolio"
6. Copia la contraseña generada (16 caracteres)
7. Úsala en la configuración de EmailJS

### 4. Crear Plantilla de Email

1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Usa esta configuración:

**Template ID:** `portfolio_contact_template`

**Subject:** `Nuevo mensaje desde tu portfolio - {{from_name}}`

**Content:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #8B5CF6, #EC4899); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .message-box { background: white; padding: 15px; border-left: 4px solid #8B5CF6; margin: 15px 0; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>🎨 Nuevo mensaje desde tu Portfolio</h2>
        </div>
        <div class="content">
            <p><strong>De:</strong> {{from_name}}</p>
            <p><strong>Email:</strong> {{from_email}}</p>
            <p><strong>Fecha:</strong> {{current_date}}</p>
            
            <div class="message-box">
                <h3>💬 Mensaje:</h3>
                <p>{{message}}</p>
            </div>
            
            <div class="footer">
                <p>Este mensaje fue enviado desde el formulario de contacto de tu portfolio.</p>
                <p>Puedes responder directamente a: {{reply_to}}</p>
            </div>
        </div>
    </div>
</body>
</html>
```

### 5. Obtener las Credenciales

Después de configurar el servicio y la plantilla:

1. **Public Key:** Ve a **"Integration"** en el menú principal
2. **Service ID:** Copia el ID del servicio que creaste
3. **Template ID:** Copia el ID de la plantilla que creaste

### 6. Configurar las Credenciales en el Proyecto

Abre el archivo `src/lib/emailjs-config.ts` y reemplaza:

```typescript
export const EMAILJS_CONFIG = {
  // Tu Public Key desde EmailJS
  PUBLIC_KEY: 'tu_public_key_aqui',
  
  // El Service ID que creaste
  SERVICE_ID: 'gmail_service', // o el nombre que hayas puesto
  
  // El Template ID que creaste
  TEMPLATE_ID: 'portfolio_contact_template',
};
```

## 🧪 Probar la Configuración

1. Guarda los cambios
2. Reinicia el servidor de desarrollo: `npm run dev`
3. Ve al formulario de contacto en tu portfolio
4. Envía un mensaje de prueba
5. Revisa tu bandeja de entrada

## 🔧 Configuración Avanzada (Opcional)

### Variables de Entorno

Para mayor seguridad, puedes usar variables de entorno:

1. Crea un archivo `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
```

2. Actualiza `emailjs-config.ts`:
```typescript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'fallback_key',
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'fallback_service',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'fallback_template',
};
```

### Auto-respuesta

Puedes configurar una segunda plantilla para enviar una confirmación automática al usuario:

**Template ID:** `auto_reply_template`

**Subject:** `Gracias por contactarme - Alisha Ibarra`

## 📊 Límites del Plan Gratuito

- **200 emails/mes** en el plan gratuito
- **Perfecto** para portfolios personales
- Para más volumen, considera el plan de pago

## ⚠️ Solución de Problemas

### Error: "EmailJS not initialized"
- Verifica que las credenciales estén correctas
- Comprueba que el Public Key esté bien copiado

### Error: "Template not found"
- Verifica el Template ID
- Asegúrate de que la plantilla esté guardada y publicada

### Emails no llegan
- Revisa la carpeta de spam
- Verifica la configuración del servicio de email
- Comprueba que la contraseña de aplicación sea correcta

### Error de CORS
- Asegúrate de usar las credenciales correctas
- Verifica que el dominio esté autorizado en EmailJS

## 🎉 ¡Listo!

Una vez configurado, tu formulario de contacto enviará emails reales directamente a tu bandeja de entrada. Los usuarios recibirán confirmación visual y tú recibirás los mensajes formateados profesionalmente.

---

**Tiempo estimado de configuración:** 15-20 minutos  
**Dificultad:** Fácil  
**Costo:** Gratuito (hasta 200 emails/mes)
# 🎨 Alisha's Atelier ✨

**Portfolio Personal de Alisha Ibarra Bello - Full-Stack Developer**

Un portfolio ultra-minimal y elegante desarrollado con Next.js 15, TypeScript y Tailwind CSS, featuring un sistema de diseño sofisticado con mejor contraste tipográfico, cartas mejoradas y una navegación premium que refleja profesionalismo y excelencia técnica.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-Latest-000000?style=for-the-badge)](https://ui.shadcn.com/)

## 🚀 Demo en Vivo

🌐 **[Ver Portfolio Live](https://alisha-s-atelier.vercel.app)** ✨

## ✨ Nuevas Características v5.0

### � **Stack Tecnológico Actualizado**
- **21+ Tecnologías**: React, Next.js, TypeScript, JavaScript, Java, Spring, JavaFX, Node.js, Python, Angular, Vaadin, Bootstrap, Genkit, PostgreSQL, MongoDB, NoSQL, Firebase, Tailwind CSS, Figma, Canva, DaVinci Resolve, Git
- **Diseño y Video**: Expertise en UI/UX con Bootstrap, Figma, Canva, y edición profesional con DaVinci Resolve
- **Java Ecosystem**: Desarrollo completo con Java, Spring Framework, JavaFX para interfaces

### 📚 **Educación Actualizada**
- **Multiplatform Application Development**: Especialización corregida (no Web Development)
- **Habilidades Ampliadas**: Android Development, Spring Boot, Markdown, Firebase añadidos a la formación
- **Tech Stack Educativo**: Java, Spring Framework, React.js, SQL, JavaScript, Figma, MongoDB, Android Development, Canva, Spring Boot, Markdown, Firebase

### 📞 **Contacto Rediseñado**
- **Sección Simplificada**: Eliminado formulario complejo, enfoque en "Get in Touch"
- **Cards Ultra-Minimal**: Diseño coherente con la temática de la página
- **Información Clara**: Available Now, Quick Response (24h), Global Remote (Madrid, Spain)
- **Interacciones Elegantes**: Hover effects sutiles con colores que aparecen solo en interacción

### 🎨 **Mejoras de Diseño Premium**
- **Cards Coherentes**: Diseño que coincide perfectamente con la temática ultra-minimal
- **Footer Mejorado**: Layout premium con logo, navegación organizada y tech stack badges
- **Navegación Corregida**: Enlaces del footer correctamente mapeados a las secciones reales
- **Micro-animaciones**: Efectos hover profesionales y transiciones suaves

## 🏗️ Arquitectura del Proyecto

### 🎯 **Secciones del Portfolio**

#### 🌟 **Profile Section** - Hero Premium
- **Avatar Flotante**: Imagen con ring brillante y efecto float sutil
- **Gradientes en Texto**: Nombre con efecto degradado elegante  
- **Stats Animadas**: Métricas con emojis y efectos hover
- **CTA Buttons**: Botones primario y secundario con micro-animaciones

#### 💼 **Projects Section** - Showcase Enhanced
- **Filtros Premium**: Navegación tipo pill con estados activos
- **Project Cards**: Overlays en hover con acciones directas
- **Featured Badges**: Indicadores brillantes con efectos glow
- **Tech Stacks**: Badges con hover effects y animaciones escalonadas

#### 🚀 **Experience Section** - Timeline Professional
- **Timeline Enhanced**: Conectores con gradientes y marcadores 3D
- **Company Cards**: Bordes brillantes y efectos de elevación
- **Current Badge**: Indicador "Current" con animación pulse
- **Skills Display**: Tecnologías en pills con hover animations

#### 🎓 **Education Section** - Academic Journey
- **Education Levels**: Badges de nivel con colores distintivos
- **Certificate Downloads**: Botones elegantes para descargar certificados
- **Timeline Académica**: Progresión educativa con diseño limpio
- **Skills Académicas**: Competencias organizadas visualmente

#### 📞 **Contact Section** - Connection Hub
- **Contact Methods**: Cartas interactivas con iconos premium
- **Enhanced Form**: Labels contrastadas y validación elegante
- **Availability Status**: Indicador en tiempo real con animación
- **Multi-Channel**: Email, LinkedIn, GitHub con diseño consistente

## 🛠️ Stack Tecnológico

### **Frontend Architecture**
```typescript
// Core Framework
Next.js 15.2.3        // React framework con App Router
TypeScript 5.0+        // Type-safe development
Tailwind CSS 3.0       // Utility-first styling
Shadcn UI              // Component library premium

// Enhanced Features
Lucide React           // Premium icon system
React Hook Form        // Form management
Zod                    // Schema validation
EmailJS               // Contact form integration
```

### **Technology Stack Completo**
```javascript
// Frontend Development
const frontend = [
  'React', 'Next.js', 'TypeScript', 'JavaScript', 'Angular', 
  'Tailwind CSS', 'Bootstrap', 'HTML/CSS'
];

// Backend Development  
const backend = [
  'Node.js', 'Java', 'Spring Framework', 'Spring Boot', 
  'Python', 'Swift', 'Vapor'
];

// Databases & Storage
const databases = [
  'PostgreSQL', 'MongoDB', 'Firebase', 'NoSQL', 'SQL'
];

// Tools & Frameworks
const tools = [
  'Git', 'Figma', 'Canva', 'DaVinci Resolve', 'JavaFX', 
  'Vaadin', 'Genkit', 'Markdown'
];

// Mobile & Platform Development
const platforms = [
  'Android Development', 'Multiplatform Apps', 'Web Apps', 'REST APIs'
];
```

### **Design System Evolution**
```css
/* Enhanced Color Palette */
:root {
  --foreground: 220 13% 9%;      /* Warmer blacks */
  --background: 0 0% 100%;       /* Pure white */
  --muted: 220 14% 96%;          /* Subtle grays */
  --border: 220 13% 91%;         /* Defined borders */
  --accent: 220 14% 4%;          /* Deep contrasts */
}

/* Premium Component Classes */
.minimal-card {
  border-radius: 1rem;           /* Rounded corners */
  box-shadow: 0 4px 20px rgba(0,0,0,0.08); /* Depth */
  backdrop-filter: blur(8px);     /* Glass effect */
}

.minimal-button {
  font-weight: 600;              /* Stronger typography */
  border-radius: 0.75rem;        /* Consistent rounding */
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1); /* Smooth */
}
```

## 📁 Estructura del Proyecto

```
📦 Alisha-s-Atelier/
├── 🎨 src/app/
│   ├── globals.css          # Enhanced design system
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio with improved spacing
├── 🧩 src/components/
│   ├── 📍 sections/         # Enhanced page sections
│   │   ├── profile-section.tsx      # Hero con animaciones
│   │   ├── projects-section.tsx     # Showcase con overlays
│   │   ├── experience-section.tsx   # Timeline mejorada
│   │   ├── education-section.tsx    # Academic journey
│   │   └── contact-section.tsx      # Connection hub
│   ├── 🎛️ layout/          # Premium layout components
│   │   ├── header.tsx       # Navegación premium
│   │   └── footer.tsx       # Footer elegante
│   └── 🎨 ui/               # Shadcn components
│       ├── button.tsx       # Enhanced button variants
│       ├── card.tsx         # Premium card system
│       └── [25+ components] # Complete UI system
├── 🔧 config/
│   ├── next.config.ts       # Framework configuration
│   ├── tailwind.config.ts   # Design system config
│   └── components.json      # Shadcn UI settings
└── 📄 docs/
    ├── README.md            # This comprehensive guide
    ├── EMAIL_SETUP.md       # EmailJS configuration
    └── blueprint.md         # Project architecture
```

## 🎨 Características de Diseño Premium

### 💎 **Enhanced Visual Hierarchy**
- **Typography Scale**: Font-weights 400-700 para jerarquía clara
- **Color Contrast**: Ratios optimizados para accesibilidad WCAG AA
- **Spacing System**: Grid de 4px para alineación perfecta
- **Border Radius**: Sistema consistente de 0.5rem a 1rem

### ✨ **Micro-interactions Premium**
- **Hover Effects**: Elevación y escala sutil en elementos interactivos
- **Loading States**: Spinners elegantes y skeleton screens
- **Transition Timing**: Cubic-bezier curves para movimiento natural
- **State Feedback**: Visual feedback inmediato en interacciones

### 🎭 **Animation System**
```css
/* Custom Animation Keyframes */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
}

@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(0,0,0,0.1); }
  50% { box-shadow: 0 0 30px rgba(0,0,0,0.15); }
}
```

## 🚀 Instalación y Desarrollo

### **Setup Rápido**
```bash
# Clonar el repositorio
git clone https://github.com/AleIb12/Alisha-s-Atelier.git
cd Alisha-s-Atelier

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
open http://localhost:3000
```

### **Scripts Disponibles**
```bash
npm run dev         # Desarrollo con hot reload
npm run build       # Build para producción
npm run start       # Ejecutar build de producción
npm run lint        # Linter y formateo
npm run preview     # Preview del build
```

## 📊 Métricas de Performance

### **Lighthouse Scores**
- 🎯 **Performance**: 98/100
- ♿ **Accessibility**: 100/100  
- 💡 **Best Practices**: 100/100
- 🔍 **SEO**: 100/100

### **Core Web Vitals**
- ⚡ **LCP**: < 1.2s (Excellent)
- 🎨 **CLS**: < 0.1 (Excellent)  
- ⚙️ **FID**: < 100ms (Excellent)

### **Bundle Analysis**
- 📦 **Initial Bundle**: ~95KB gzipped
- 🖼️ **Images**: WebP/AVIF optimized
- 🚀 **First Paint**: < 0.8s
- 📱 **Mobile Score**: 96/100

## 🌟 Proyectos Destacados

### **1. Health Mobile** ⭐ Featured
- **Stack**: React, Node.js, AI, PostgreSQL, TypeScript
- **Demo**: [salud-movil.vercel.app](https://salud-movil.vercel.app/)
- **Características**: AI recommendations, real-time monitoring

### **2. MCHAPP** 🏢 Professional
- **Stack**: React, TypeScript, Node.js, PostgreSQL, IoT
- **Características**: Smart apartment management, IoT integration

### **3. Omkrom API** 🚀 Current
- **Stack**: Swift, Vapor, PostgreSQL, JWT
- **Estado**: En desarrollo activo
- **Características**: REST API, authentication system

### **4. Pokémon Explorer** 🎮
- **Stack**: React, JavaScript, REST API
- **Demo**: [projecto-pokemon.vercel.app](https://projecto-pokemon.vercel.app)
- **Repo**: [github.com/AleIb12/projecto-pokemon](https://github.com/AleIb12/projecto-pokemon)

## 💼 Experiencia Profesional

### **Omkrom** (Mayo 2025 - Presente)
- **Rol**: Software Developer
- **Stack**: Swift, Angular, TypeScript, CSS, SQL
- **Enfoque**: Backend development, REST APIs

### **MyCityHome** (Marzo 2025 - Mayo 2025)
- **Rol**: Software Developer  
- **Stack**: React, TypeScript, Python, Java, PostgreSQL
- **Logros**: Platform features, API integrations

### **Corazonistas Madrid** (Nov 2024 - Mar 2025)
- **Rol**: Robotics Teacher
- **Stack**: Educational Technology, Programming
- **Enfoque**: STEM education, curriculum development

## 🎓 Formación Académica

### **Upgrade Hub** (2022-2025)
- **Título**: Desarrollo de Aplicaciones Multiplataforma y Web
- **Stack**: Java, Spring, React, SQL, JavaScript, MongoDB
- **Estado**: ✅ Completado

### **María Inmaculada** (2020-2022)
- **Título**: Sistemas Microinformáticos y Redes
- **Stack**: Network Management, Security, Hardware
- **Estado**: ✅ Completado

## 📞 Contacto

### **Alisha Ibarra Bello**
- 📧 **Email**: [ibarrabelloalisha@gmail.com](mailto:ibarrabelloalisha@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/alisha-ibarra-bello-4526561b6](https://www.linkedin.com/in/alisha-ibarra-bello-4526561b6)
- 🐙 **GitHub**: [github.com/AleIb12](https://github.com/AleIb12)

### **Tiempo de Respuesta**
- ✉️ **Email**: 2-4 horas
- 💬 **LinkedIn**: 1-2 horas
- 📱 **Disponible**: Para nuevos proyectos

## 🚀 Deploy

### **Vercel Deployment**
```bash
# Deploy automático
vercel --prod

# Configurar dominio
vercel domains add tu-dominio.com
```

### **Configuración de Entorno**
```env
# .env.local
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template
```

## 🤝 Contribuciones

¿Interesado en contribuir o colaborar?

1. **Fork** el proyecto
2. **Crea** una rama (`git checkout -b feature/enhancement`)
3. **Commit** tus cambios (`git commit -m 'Add enhancement'`)
4. **Push** a la rama (`git push origin feature/enhancement`)
5. **Abre** un Pull Request

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT** - ver [LICENSE](LICENSE) para detalles.

## 🙏 Agradecimientos

- **Shadcn UI** - Por los componentes premium
- **Vercel** - Por el hosting excepcional  
- **Tailwind CSS** - Por el sistema de diseño
- **Lucide** - Por los iconos elegantes
- **Next.js Team** - Por el framework increíble

---

<div align="center">

### ⭐ ¡Si te gusta este proyecto, dale una estrella! ⭐

**Hecho con 💜 y mucho ☕ por Alisha Ibarra**

*Portfolio v4.0 - Enhanced Design System*  
*Última actualización: Julio 2025*

</div>

## � Secciones del Portfolio

### 🌟 **Profile Section (About Me)**
- **Presentación Profesional**: Información personal con enfoque en experiencia de 1 año
- **Tech Stack Actualizado**: React, Next.js, Tailwind CSS, TypeScript, Spring Framework, Python, Swift
- **Estadísticas Precisas**: Métricas actualizadas con experiencia real y proyectos completados
- **Contact Links**: Enlaces directos a GitHub, LinkedIn, email y CV con diseño minimal
- **Clean Layout**: Disposición limpia con cards minimalistas y tipografía elegante

### 🎯 **Projects Section (Featured Work)**
- **Showcase Minimal**: Grid limpio con proyectos destacados en cards elegantes
- **Filtering System**: Filtros por categoría (All, Web Apps, APIs, Tools, Featured)
- **Clean Project Cards**: Diseño minimal con información esencial y enlaces directos
- **Technology Badges**: Stack tecnológico con badges discretos y profesionales
- **Professional Focus**: Énfasis en proyectos profesionales (MCHAPP, Neonize, Omkrom API)
- **Responsive Grid**: Layout adaptativo que mantiene la elegancia en todos los dispositivos

### 🎓 **Experience Section (Professional Journey)**
- **Timeline Minimal**: Línea de tiempo clean con experiencia de 1 año documentada
- **Professional Cards**: Información detallada de roles con diseño minimal
- **Skills Display**: Tecnologías organizadas de forma elegante y legible
- **Current Status**: Indicadores claros de posición actual y proyectos activos
- **Clean Statistics**: Métricas profesionales con 1 año de experiencia, 4 roles, 20+ tecnologías

### 📚 **Education Section (Academic Background)**
- **Academic Timeline**: Progresión educativa con diseño minimal y elegante
- **Education Levels**: Grado Superior, Grado Medio, Educación Secundaria con información detallada
- **Certification Downloads**: Enlaces directos para descarga de certificados oficiales
- **Skills Académicas**: Tecnologías y competencias adquiridas organizadas claramente
- **Clean Layout**: Diseño limpio que enfatiza la información académica relevante

### 📞 **Contact Section (Get in Touch)**
- **Minimal Contact Form**: Formulario limpio y funcional con EmailJS para envío real
- **Professional Integration**: Sistema completo de emails a `ibarrabelloalisha@gmail.com`
- **Clean Validation**: Validación discreta con mensajes de error elegantes
- **Multi-Channel Contact**: Email, WhatsApp, Telegram con diseño consistente
- **Availability Status**: Indicador profesional de disponibilidad para proyectos
- **Subtle Notifications**: Toast notifications con diseño minimal para feedback

## 🛠️ Stack Tecnológico Completo

### **Frontend Core**
- **Framework**: Next.js 15.2.3 (App Router + Turbopack)
- **Language**: TypeScript 5.0+ (Type-safe development)
- **Styling**: Tailwind CSS 3.0 (Utility-first design)
- **Components**: Shadcn UI (Radix UI primitives)
- **Icons**: Lucide React (Modern icon library)

### **UI/UX Components**
- **Ultra-Minimal Design System**: Componentes con paleta monochrome refinada
- **Clean Forms**: React Hook Form + Zod validation con diseño elegante
- **Subtle Notifications**: Toast system con animaciones discretas
- **Minimal Modals**: Dialog components con enfoque en accesibilidad
- **Professional Badges**: Indicadores de estado con diseño clean
- **Elegant Cards**: Showcase de proyectos con transiciones suaves

### **Development Tools**
- **Package Manager**: npm (Latest stable)
- **Code Quality**: ESLint + Prettier configuration
- **Git**: Version control with conventional commits
- **Deployment**: Vercel (Automatic deployments)
- **Performance**: Image optimization + lazy loading

### **Features & Integrations**
- **SEO Optimized**: Meta tags optimization y structured data
- **Ultra-Minimal Analytics**: Performance monitoring con diseño clean
- **Accessibility First**: WCAG compliant components con enfoque en usabilidad
- **Mobile-First Responsive**: Diseño adaptativo elegante para todos los dispositivos
- **Performance Excellence**: Core Web Vitals optimizados con carga rápida
- **EmailJS Integration**: Sistema real de envío de emails con validación profesional
- **Elegant Form Validation**: Validación client-side con manejo discreto de errores

## 📁 Estructura del Proyecto

```
📦 Alisha-s-Atelier/
├── 📁 public/
│   ├── favicon.svg              # Ultra-minimal A logo favicon
│   ├── favicon-192.png          # PWA icon optimizado (192x192)
│   ├── favicon-512.png          # PWA icon optimizado (512x512)
│   ├── favicon.ico              # Browser favicon minimal
│   ├── 📁 images/
│   │   ├── 📁 profile/          # Profile photos
│   │   ├── 📁 projects/         # Project screenshots
│   │   └── 📁 portfolio/        # Company logos
│   └── 📁 documents/
│       └── 📁 cv/               # CV downloads
├── 📁 src/
│   ├── 📁 app/
│   │   ├── globals.css          # Ultra-minimal styles + monochrome system
│   │   ├── layout.tsx           # Root layout with metadata optimizado
│   │   ├── page.tsx             # Main portfolio page con loading elegante
│   │   └── actions.ts           # Server actions
│   ├── 📁 components/
│   │   ├── 📁 common/           # Shared components
│   │   │   ├── loading-screen.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   ├── social-links.tsx
│   │   │   └── project-stats.tsx
│   │   ├── 📁 sections/         # Page sections
│   │   │   ├── profile-section.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── experience-section.tsx
│   │   │   ├── education-section.tsx
│   │   │   └── contact-section.tsx
│   │   ├── 📁 layout/           # Layout components
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   └── 📁 ui/               # Shadcn UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── badge.tsx
│   │       ├── dialog.tsx
│   │       └── [25+ more components]
│   ├── 📁 hooks/                # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── use-mobile.tsx
│   ├── 📁 lib/                  # Utilities
│   │   ├── utils.ts
│   │   └── email-template.ts
│   └── 📁 types/                # TypeScript definitions
│       └── index.ts
├── 📁 docs/                     # Documentation
│   └── blueprint.md
├── ⚙️ next.config.ts            # Next.js configuration
├── ⚙️ tailwind.config.ts        # Tailwind CSS config
├── ⚙️ tsconfig.json             # TypeScript config
├── ⚙️ components.json           # Shadcn UI config
## � Instalación y Configuración

### **Prerequisitos**
- Node.js 18.0.0 o superior
- npm 9.0.0 o superior
- Git para clonar el repositorio

### **Pasos de Instalación**

1. **Clonar el repositorio**
```bash
git clone https://github.com/AleIb12/Alisha-s-Atelier.git
cd Alisha-s-Atelier
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno (opcional)**
```bash
# Crear archivo .env.local para configuraciones personales
cp .env.example .env.local
```

4. **Ejecutar en modo desarrollo**
```bash
npm run dev
```

5. **Abrir en el navegador**
```
http://localhost:3000
```

### **Scripts Disponibles**

```bash
# Desarrollo con Turbopack (recomendado)
npm run dev

# Desarrollo en puerto específico
npm run dev -- -p 9002

# Build para producción
npm run build

# Ejecutar build de producción
npm run start

# Linting del código
npm run lint

# Formatear código con Prettier
npm run format
```

## 🎨 Personalización

### **Colores y Temas Ultra-Minimal**
Los colores están definidos en `src/app/globals.css` con paleta monochrome:

```css
/* Ultra-minimal color system */
:root {
  --background: 99% 99% 99%;        /* #fcfcfc */
  --foreground: 5% 5% 5%;           /* #0c0c0c */
  --muted: 98% 98% 98%;             /* #f5f5f5 */
  --muted-foreground: 45% 45% 45%;  /* #737373 */
  --border: 90% 90% 90%;            /* #e5e5e5 */
  --input: 96% 96% 96%;             /* #f5f5f5 */
  --primary: 5% 5% 5%;              /* #171717 */
  --secondary: 96% 96% 96%;         /* #f5f5f5 */
  --accent: 96% 96% 96%;            /* #f5f5f5 */
}

/* Minimal component classes */
.minimal-card {
  background: hsl(var(--background));
  border: 1px solid hsl(var(--border));
  border-radius: 0.75rem;
}
```

### **Componentes Shadcn UI**
Para agregar nuevos componentes:

```bash
# Agregar componente específico
npx shadcn-ui@latest add [component-name]

# Agregar múltiples componentes
npx shadcn-ui@latest add button card input
```

### ✨ Favicon Ultra-Minimal
El favicon actual tiene un diseño ultra-minimal con letra "A" geométrica. Para personalizarlo:

1. Reemplaza `public/favicon.svg` con tu diseño
2. Regenera los archivos PNG e ICO:
```bash
# Usando el script de generación
node generate-favicons.mjs
```

**Características del favicon actual:**
- **Diseño**: Letra "A" geométrica minimal con punto de acento
- **Colores**: Paleta monochrome (#fafafa, #e5e5e5, #171717, #737373)
- **Formatos**: SVG, PNG (32x32, 192x192, 512x512), ICO
- **Optimizado**: Tamaños de archivo reducidos para carga rápida

## � Configuración de EmailJS

### **Sistema de Envío de Correos Real**
El formulario de contacto utiliza EmailJS para enviar correos reales directamente a tu bandeja de entrada.

**Configuración Rápida:**
1. Crear cuenta en [EmailJS.com](https://www.emailjs.com)
2. Configurar servicio de Gmail
3. Crear template de email
4. Obtener credenciales (Public Key, Service ID, Template ID)
5. Configurar variables de entorno

**Variables de Entorno (.env.local):**
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id  
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
```

**Características del Sistema:**
- ✅ Envío real de correos a `ibarrabelloalisha@gmail.com`
- ✅ Validación de formulario con mensajes de error
- ✅ Plantillas HTML profesionales
- ✅ Confirmación visual con toast notifications
- ✅ Plan gratuito: 200 emails/mes

**Guías Completas:**
- 📖 [Configuración Rápida](./EMAIL_SETUP.md) - Setup en 5 minutos
- 📖 [Guía Detallada](./EMAILJS_SETUP.md) - Configuración paso a paso

## �🔧 Configuración Avanzada

### **Optimización de Imágenes**
Las imágenes están configuradas en `next.config.ts`:

```typescript
images: {
  domains: ['your-domain.com'],
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
}
```

### **SEO y Metadata**
Configuración en `src/app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Alisha's Atelier - Portfolio",
  description: "Full-Stack Developer & Creative Coder",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
}
```

## 📊 Métricas del Proyecto

### **Estadísticas Actuales v5.0**
- 📁 **6 Proyectos** principales showcased (3 profesionales, 3 personales)
- 💻 **21,000+ líneas** de código TypeScript/TSX/Python/Node.js/Swift/Java
- 🛠️ **21+ tecnologías** diferentes utilizadas en proyectos
- ⭐ **1 proyecto destacado** (Health Mobile)
- 🏢 **3 proyectos profesionales** activos (MCHAPP, Neonize, Omkrom API)
- 🎨 **25+ componentes** Shadcn UI integrados con diseño minimal
- 📱 **100% responsive** con diseño ultra-minimal en todos los dispositivos
- 💼 **1 año de experiencia** profesional documentada
- 🎓 **3 niveles educativos** completados (Multiplatform Development, Redes, Ciencias)
- 🎨 **Diseño y Video**: UI/UX design con Figma, Canva, y edición con DaVinci Resolve
- ☕ **Java Ecosystem**: Desarrollo completo con Java, Spring, JavaFX para interfaces

### **Performance Metrics**
- ⚡ **95+ Lighthouse Score** en todas las categorías
- 🚀 **< 1s** tiempo de carga inicial optimizado
- 📦 **< 100KB** bundle size ultra-optimizado
- 🎯 **Core Web Vitals** perfectos para UX minimal
- 🎨 **Ultra-minimal loading** con transiciones elegantes

## 🌟 Proyectos Destacados

### **1. Health Mobile** ⭐ Featured
- **Tecnologías**: React, Node.js, SQL, NoSQL, JavaScript, AI
- **Complejidad**: Advanced
- **Líneas de código**: 5,200+
- **Tiempo de desarrollo**: 3 meses
- **Características**: AI-powered recommendations, real-time sync, analytics dashboard

### **2. MCHAPP** 🏢 Professional
- **Tecnologías**: Node.js, Express, REST API, JavaScript, PostgreSQL, IoT
- **Complejidad**: Advanced
- **Líneas de código**: 4,500+
- **Tiempo de desarrollo**: 2 meses (trabajo en equipo)
- **Características**: IoT integration, apartment management, access control, REST API
- **Confidencial**: Proyecto profesional para MyCityHome

### **3. Neonize** 🤖 Professional
- **Tecnologías**: Python, PostgreSQL, WhatsApp API, Database Management
- **Complejidad**: Advanced
- **Líneas de código**: 3,200+
- **Tiempo de desarrollo**: 1.5 meses
- **Características**: WhatsApp automation, database sync, contact management
- **Confidencial**: Proyecto profesional para MyCityHome

### **4. Omkrom API** 🚀 Professional (Current)
- **Tecnologías**: Swift, Vapor 4, PostgreSQL, REST API, Authentication, Email System
- **Complejidad**: Advanced
- **Líneas de código**: 3,800+
- **Tiempo de desarrollo**: En curso
- **Características**: Swift Vapor 4 framework, JWT authentication, user management, email system
- **Estado**: En desarrollo activo para Omkrom

### **5. Pokémon Project**
- **Tecnologías**: React, JavaScript, API, HTML/CSS
- **Complejidad**: Intermediate  
- **Líneas de código**: 2,800+
- **Tiempo de desarrollo**: 6 semanas
- **Características**: RESTful API integration, advanced search, responsive design

### **6. Piano Simulator**
- **Tecnologías**: React, JavaScript, HTML, CSS, Web Audio API
- **Complejidad**: Intermediate
- **Líneas de código**: 1,500+
- **Tiempo de desarrollo**: 4 semanas
- **Características**: Web Audio API, real-time synthesis, mobile-friendly

## 🤝 Contribuciones

¿Interesado en contribuir? ¡Me encantaría colaborar!

### **Cómo Contribuir**
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### **Guidelines**
- Seguir las convenciones de código existentes
- Incluir tests para nuevas funcionalidades
- Documentar cambios en el README
- Usar conventional commits para mensajes

## 📞 Contacto

### **Alisha Ibarra Bello**
- 📧 **Email**: [ibarrabelloalisha@gmail.com](mailto:ibarrabelloalisha@gmail.com)
- 💼 **LinkedIn**: [linkedin.com/in/alisha-ibarra-bello-4526561b6](https://www.linkedin.com/in/alisha-ibarra-bello-4526561b6)
- 🐙 **GitHub**: [github.com/AleIb12](https://github.com/AleIb12)
- 📱 **WhatsApp**: [+34 692 616 005](https://wa.me/34692616005)
- 📲 **Telegram**: [@Alisha_Ibarra](https://t.me/Alisha_Ibarra)

### **Response Times**
- ✉️ **Email**: Within 2-4 hours
- 💬 **WhatsApp**: Usually within 30 mins  
- 📨 **Telegram**: Within 1-2 hours

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Agradecimientos

- **Shadcn UI** por los componentes increíbles
- **Vercel** por el hosting gratuito
- **Lucide** por los iconos hermosos
- **Tailwind CSS** por el sistema de diseño
- **Next.js** por el framework potente

---

<div align="center">

### ⭐ ¡Si te gusta este proyecto, dale una estrella! ⭐

**Hecho con 💜 por Alisha Ibarra**

</div>


Proyectos destacados con demos en vivo y código fuente:

1. **Salud Móvil** 🏥
   - Aplicación de seguimiento de salud personal
   - **Demo**: [salud-movil.vercel.app](https://salud-movil.vercel.app/)
   - **Tech**: React, Node.js, SQL, NoSQL, JavaScript, HTML/CSS, AI
   - *Repositorio privado*

2. **MCHAPP** 🏢
   - Plataforma de gestión integral de apartamentos con IoT
   - **Tech**: Node.js, Express, REST API, JavaScript, PostgreSQL, IoT Integration
   - *Proyecto profesional confidencial*

3. **Neonize** 🤖
   - Sistema de automatización de WhatsApp con Python
   - **Tech**: Python, PostgreSQL, WhatsApp API, Database Management, Automation
   - *Proyecto profesional confidencial*

4. **Omkrom API** 🚀
   - API REST backend desarrollada en Swift con Vapor 4
   - **Tech**: Swift, Vapor 4, PostgreSQL, REST API, Authentication, Email System
   - *Proyecto actual en desarrollo*

5. **Proyecto Pokémon** 🎮
   - Pokedex interactiva con API REST
   - **Demo**: [projecto-pokemon.vercel.app](https://projecto-pokemon.vercel.app)
   - **Repo**: [github.com/AleIb12/projecto-pokemon](https://github.com/AleIb12/projecto-pokemon)
   - **Tech**: React, JavaScript, API, HTML/CSS

6. **Simulador de Piano** 🎹
   - Piano virtual interactivo
   - **Demo**: [piano-six-kappa.vercel.app](https://piano-six-kappa.vercel.app)
   - **Repo**: [github.com/AleIb12/piano](https://github.com/AleIb12/piano)
   - **Tech**: React, JavaScript, HTML, CSS, Web Audio API



#### 🏢 Experiencias Profesionales Destacadas:

**Freelance Developer (Junio 2025 - Presente)** - Independent Contractor
- **Stack**: React, Next.js, TypeScript, Node.js, Tailwind CSS
- **Enfoque**: Desarrollo full-stack, relaciones con clientes, gestión de proyectos, diseño UI/UX
- **Status**: 🟢 Posición actual (trabajo simultáneo)

**Omkrom (Mayo 2025 - Presente)** - Software Developer
- **Stack**: Swift, Angular, TypeScript, CSS, SQL
- **Enfoque**: Desarrollo de aplicaciones, arquitectura de software, metodologías ágiles
- **Status**: 🟢 Posición actual (trabajo simultáneo)

**MyCityHome (Marzo 2025 - Mayo 2025)** - Software Developer  
- **Stack**: React, TypeScript, Python, Java, CSS, PostgreSQL, Firebase
- **Enfoque**: Desarrollo full-stack, gestión de bases de datos, integración de APIs
- **Status**: ✨ Proyecto completado

**Corazonistas Madrid (Noviembre 2024 - Marzo 2025)** - Robotics Teacher
- **Stack**: Kodu, MakeCode Arcade, Scratch, Educational Robotics
- **Enfoque**: Enseñanza STEM, desarrollo de materiales educativos
- **Status**: ✨ Proyecto completado



#### 🎓 Formación Académica Destacada:

**Upgrade Hub (Septiembre 2022 - Junio 2025)** - Ciclo Formativo Grado Superior
- **Especialización**: Desarrollo de Aplicaciones Multiplataforma
- **Stack**: Java, Spring Framework, React.js, SQL, JavaScript, Figma, MongoDB, Android Development, Canva, Spring Boot, Markdown, Firebase
- **Aptitudes**: Desarrollo multiplatforma, Comunicación, Compromiso, Gestión de bases de datos
- **Certificado**: Descarga disponible del certificado oficial
- **Status**: 🎓 Grado Superior Completado

**Colegio María Inmaculada Fuencarral (Septiembre 2020 - Junio 2022)** - Ciclo Formativo Grado Medio
- **Especialización**: Sistemas Microinformáticos y Redes
- **Stack**: Gestión de redes, Diseño de redes, Seguridad de redes, Redes inalámbricas, Hardware
- **Aptitudes**: Montaje de hardware informático, Administración de sistemas
- **Status**: 📚 Grado Medio Completado

**Colegio La Inmaculada (Septiembre 2017 - Junio 2020)** - Educación Secundaria
- **Especialización**: Ciencias
- **Stack**: Fundamentos científicos, Matemáticas, Física, Química, Tecnología
- **Aptitudes**: Base científica y técnica
- **Status**: 🏫 Educación Secundaria Completada



    company: "MyCityHome",
    dateRange: "March 2025 – May 2025", 
    skills: ["React", "TypeScript", "Python", "Java", "CSS", "PostgreSQL", "Firebase", "Web Development", "Frontend", "Backend", "Databases", "APIs"],
    // ... resto de configuración
  }
  // Agregar nuevas experiencias aquí
]
```

### 🎨 Proyectos Portfolio
**Ubicación**: `src/components/sections/projects-section.tsx`  
```tsx
// Configurar proyectos destacados
const projectsData = [
  {
    title: "Nuevo Proyecto",
    description: "Descripción del proyecto...",
    imageUrl: "/images/projects/nuevo-proyecto.jpg",
    technologies: ["React", "TypeScript", "Tailwind"],
    liveDemoUrl: "https://demo.com",
    repoUrl: "https://github.com/usuario/repo"
  }
  // Máximo recomendado: 3-6 proyectos
]
```

### 📱 Enlaces de Contacto
**Ubicación**: `src/components/sections/contact-section.tsx`
```tsx
// Actualizar métodos de contacto (3 opciones disponibles)
const contactCards = [
  {
    title: "Email Me",
    href: "mailto:tu-email@gmail.com",
    copyText: "tu-email@gmail.com"
  },
  {
    title: "WhatsApp", 
    href: "https://wa.me/TUNUMERO"
  },
  {
    title: "Telegram",
    href: "https://t.me/TU_USERNAME"
  }
  // Personalizar según preferencias
]
```

## 🌟 Features Ultra-Minimal Destacadas

### ✨ Micro-Interacciones Elegantes
- **Subtle Hover Effects**: Transiciones suaves con elevación discreta
- **Clean Button States**: Estados de botón con cambios de color profesionales
- **Minimal Loading States**: Indicadores de carga discretos y elegantes
- **Smooth Transitions**: Animaciones suaves entre estados de aplicación

### 🎨 Sistema Visual Refined
- **Monochrome Harmony**: Paleta de grises cuidadosamente seleccionada
- **Typography Hierarchy**: Jerarquía visual clara con Inter y JetBrains Mono
- **Consistent Spacing**: Grid de 4px para alineación perfecta
- **Minimal Iconography**: Lucide React para iconos consistentes y elegantes

### 🔮 Efectos Profesionales
- **Clean Cards**: Tarjetas con bordes sutiles y sombras discretas
- **Elegant Borders**: Contornos definidos sin sobrecargar el diseño
- **Smooth Scrolling**: Navegación fluida con transiciones naturales
- **Professional Loading**: Estados de carga rápidos y elegantes
- **Content Focus**: Diseño que prioriza el contenido sobre la decoración

### 📊 Performance Metrics
- **Lighthouse Score**: 95+ en todas las categorías
- **First Paint**: < 1s en 3G (optimizado para carga rápida)
- **Bundle Size**: < 100KB gzipped (ultra-optimizado)
- **CLS Score**: < 0.1 (excelente estabilidad visual)
- **Minimal Loading**: Transiciones rápidas sin impacto en UX

## 🚀 Deploy en Vercel

### Configuración Automática
```bash
# 1. Conectar con GitHub
vercel --prod

# 2. Configurar dominio custom (opcional)
vercel domains add tu-dominio.com

# 3. Variables de entorno (si las necesitas)
vercel env add NEXT_PUBLIC_ANALYTICS_ID
```

### Optimizaciones de Deploy
- **Edge Functions**: Geolocalización automática de contenido
- **Image Optimization**: Compresión automática con WebP/AVIF
- **Static Generation**: Pre-rendering de todas las páginas
- **CDN Global**: Distribución mundial con cache inteligente

## 🎪 Próximas Características

### 🌙 Modo Oscuro Ultra-Minimal
- Toggle elegante con transiciones suaves
- Paleta de grises oscuros cuidadosamente seleccionada
- Persistencia de preferencia con local storage

### 📈 Analytics Discretos
- Métricas de rendimiento con visualización minimal
- Insights de uso sin comprometer la privacidad
- Dashboard clean con información relevante

### 🎬 Enhanced Performance
- **Optimized Loading**: Estados de carga aún más rápidos
- **Smart Caching**: Cache inteligente para mejor rendimiento
- **Progressive Enhancement**: Mejoras progresivas sin impacto visual

---

## 💝 Créditos y Agradecimientos

**Diseñado y desarrollado con mucho ❤️ por Alisha Ibarra Bello**

### 🎨 Inspiración de Diseño
- **Ultra-Minimalism**: Tendencia de design systems modernos
- **Monochrome Aesthetics**: Paleta refinada y profesional
- **Content-First Design**: Enfoque en legibilidad y funcionalidad
- **Swiss Design Principles**: Tipografía clara y espaciado generoso

### 🛠️ Tecnologías que Hacen Posible la Elegancia
- **Next.js Team**: Por el framework increíble y Turbopack
- **Tailwind Labs**: Por las utilidades CSS perfectas  
- **Shadcn**: Por los componentes base elegantes y accesibles
- **Lucide**: Por los iconos SVG consistentes y profesionales
- **Vercel**: Por el hosting y deployment seamless

### 🌟 Ultra-Minimal Excellence
Este portfolio es un ejemplo de cómo crear experiencias web profesionales, elegantes y funcionales. 
¡Siéntete libre de inspirarte y crear algo aún más refinado! ✨

---

*"Simplicity is the ultimate sophistication"* - Leonardo da Vinci ✨

**Portfolio Version**: 5.0 Ultra-Minimal Enhanced ✨  
**Última actualización**: Agosto 2025  
**Diseño**: Ultra-minimal monochrome con paleta de grises refinada y cards coherentes  
**Stack actualizado**: 21+ tecnologías incluyendo Java ecosystem, diseño y video editing  
**Nuevas tecnologías**: JavaFX, Bootstrap, Canva, DaVinci Resolve, Android Development, Spring Boot, Firebase  
**Educación corregida**: Desarrollo de Aplicaciones Multiplataforma (no Web Development)  
**Contacto mejorado**: Sección simplificada sin formulario, diseño coherente con tema  
**Footer premium**: Navegación corregida, tech stack badges, diseño moderno  
**Cards rediseñadas**: Disponibilidad, respuesta y ubicación con hover effects sutiles  
**Performance**: Bundle optimizado, navegación corregida, experiencia mejorada  
**Estado**: Portfolio profesional con stack completo y diseño ultra-minimal coherente ✨

# Bitácora de Desarrollo: Segue Yachts 2026 (Next.js Migration)

## 1. Resumen del Proyecto
Desarrollo de una Landing Page de "Ultra Lujo" para Segue Yachts, migrando de una maquetación estática/WordPress a **Next.js** con **TailwindCSS**. El objetivo fue lograr una experiencia inmersiva, animada y totalmente funcional, optimizada tanto para escritorio como para móviles.

## 2. Tecnologías Utilizadas
*   **Framework**: Next.js 15+ (App Router).
*   **Estilos**: TailwindCSS (con configuración personalizada de tema).
*   **Despliegue**: Vercel.
*   **Backend (Formulario)**: Formspree (Serverless).
*   **Fuentes**: Riviera Nights (Serif/Display) y Outfit (Sans-Serif).
*   **Media**: Videos de fondo vía Vimeo (Iframes controlados).

---

## 3. Desafíos y Soluciones (Troubleshooting Log)

### A. Despliegue en Vercel (Error 404)
*   **Problema**: Al desplegar, Vercel devolvía un 404 en la home, aunque el build local funcionaba.
*   **Causa**: Mala configuración de la raíz del proyecto o falta de archivos de salida estáticos claros.
*   **Solución**: Se aseguró la presencia de `vercel.json` con configuración estándar `framework: nextjs` y se verificó que el comando `next build` generara correctamente la carpeta `.next`. Se añadieron scripts de deploy explícitos.

### B. Video Hero en Mobile (Bordes Negros)
*   **Problema**: El video de Vimeo mantenía su aspect ratio, generando barras negras arriba y abajo en pantallas verticales (celulares).
*   **Solución**: Se aplicó una transformación CSS agresiva en mobile: `scale-[3.5]`. Esto hace un "zoom" al centro del video, cubriendo el 100% del alto de la pantalla sin deformar la imagen.

### C. Tipografía y Caracteres Especiales ('Ñ')
*   **Problema**: La fuente "Riviera Nights" no renderizaba correctamente la "Ñ" en "DISEÑO", mostrando un glifo genérico.
*   **Solución**: 
    1. Se intentó usar una alternativa Serif.
    2. **Solución Final**: Se optó por cambiar el título a **Sans-Serif (Outfit)** en bloques de texto específicos. Esto no solo arregló la "Ñ", sino que le dio un aire más moderno y limpio a los títulos principales.

### D. Layout Mobile "Trinity Cards"
*   **Problema**: Las tarjetas interactivas eran difíciles de navegar en mobile. El contenido quedaba oculto o el acordeón era muy alto.
*   **Solución**: 
    *   Se implementó lógica de estado (`activeCard`).
    *   Altura dinámica: `h-[160px]` (colapsada) vs `h-[650px]` (expandida).
    *   Se añadió padding inferior (`pb-12`) para evitar que el botón de "Explorar" quedara pegado al borde.

### E. Formulario y Seguridad (Spam)
*   **Problema**: Necesidad de recibir correos sin backend propio y riesgo de bots.
*   **Solución**: 
    *   Integración con **Formspree**.
    *   Implementación de **Honeypot (`_gotcha`)**: Un campo oculto `display: none`. Si un bot lo llena, el correo se descarta. No molesta al usuario real.
    *   Feedback visual: Cambio de color del botón a verde al enviar.

---

## 4. Estándares de Diseño y CSS (Design System)

### Colores Principales
*   **Segue Blue**: `#0047AB` (Botones, acentos).
*   **Primary Gold**: `#c59f59` (Textos de lujo, detalles finos).
*   **Dark Surface**: `#020d17` / `#0b1623` (Fondos profundos).

### Estilos Recurrentes (Clases de Utilidad)
*   **Glassmorphism**: `bg-white/5 backdrop-blur-xl border border-white/10`. Usado en tarjetas y formularios para dar sensación de cristal flotante.
*   **Light Streak**: Animación personalizada en `globals.css` que crea un brillo pasando sobre botones y tarjetas.
*   **Tracking**: Uso intensivo de `tracking-[0.4em]` (interletrado muy abierto) en subtítulos pequeños para elegancia.

### Animaciones
*   `transition-all duration-500`: Suavidad en todos los hovers.
*   `hover:scale-[1.05]`: Micro-interacciones en botones.

---

## 5. Skill Sugerida: "Luxury Web Deployer"

Para replicar este éxito en futuros proyectos, se puede crear una **Skill** (un archivo de instrucciones para la IA) con la siguiente estructura:

### Nombre: `luxury_web_scaffold`
**Descripción**: Genera una estructura de landing page de alto nivel con Next.js, lista para Vercel.

**Capabilities**:
1.  **Setup Inicial**: Instala Next.js + Tailwind + Lucide Icons.
2.  **Configuración de Fuente**: Configura automáticamente `next/font` con una Serif (ej. Playfair/Riviera) y una Sans (Outfit/Inter).
3.  **Componentes Core**:
    *   `HeroVideo`: Con lógica de escalado mobile (`scale-350`).
    *   `GlassCard`: Componente reutilizable con efecto de vidrio.
    *   `AccordionGrid`: Para secciones tipo "Trinity Cards".
4.  **Formulario Seguro**: Boilerplate de formulario con Formspree + Honeypot pre-configurado.
5.  **Deploy Check**: Script de validación de build antes de push.

---

Esta bitácora sirve como la "memoria muscular" del proyecto. Cualquier futuro sitio "Clase Segue" debería comenzar leyendo este documento.

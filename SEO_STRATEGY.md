# Documento Madre SEO & Arquitectura Digital
### Proyecto: Segue Yachts 2026
**Dominio activo:** [https://discover.segueyachts.com](https://discover.segueyachts.com)

**Objetivo:** Posicionar Segue como astillero premium con alcance global y hubs regionales estratégicos, mientras se prepara el sitio principal completo.

---

## 1) Objetivos Estratégicos

### 1.1 Negocio
*   Generar leads cualificados (consultas reales, visitas, presupuestos).
*   Construir autoridad de marca global (no solo tráfico).
*   Preparar transición limpia al sitio principal (`segueyachts.com`) sin canibalización SEO.

### 1.2 SEO
*   Dominar búsquedas de marca + intención alta en regiones clave.
*   Construir *topical authority* en construcción, diseño y astillero premium.
*   Mantener `discover` como microsite de experiencia / intro.

---

## 2) Mercados & Hubs Prioritarios

### Global
*   **Italia**
*   **Reino Unido**
*   **Estados Unidos (Florida)**

### Florida (Detalle)
*   Miami
*   Miami Beach
*   Fort Lauderdale (hub náutico clave)

### Brasil
*   (Brasil general, con foco en hubs náuticos principales)

### Argentina (Alto Valor)
*   De San Fernando (origen operativo) hacia:
    *   Delta del Tigre
    *   Tigre
    *   Nordelta
    *   Santa Bárbara
    *   Rosario
    *   Entre Ríos
    *   Corrientes

*San Fernando queda como origen operativo (astillero), pero la narrativa es marca global con presencia en hubs premium.*

---

## 3) Posicionamiento & Mensaje SEO Base

**Mensaje troncal (variantes):**
1.  *Luxury yacht builder with global reach, based in Argentina.*
2.  *Premium yacht construction and design for international and regional markets.*
3.  *Astillero de yates premium con alcance internacional y hubs regionales.*

**Ubicación de mensajes:**
*   Titles
*   H1/H2
*   Schema
*   Footer/contexto
*   Contenido de hubs

---

## 4) Arquitectura Recomendada (Discover)

*Discover NO es el sitio final de catálogo. Es intro + autoridad + local/global hubs.*

### Páginas mínimas a crear (Satélite)
*   `/about` - Historia, visión, capacidades, enfoque internacional.
*   `/shipyard` (o `/shipyard-argentina`) - Astillero, procesos, ingeniería, origen.
*   `/services` - Diseño, construcción, custom builds, refit, asesoría.
*   `/contact` - Contacto global + CTA + mapa/contexto.

### Regional Hubs (`/hubs`)
*   `/hubs/delta-tigre`
*   `/hubs/nordelta`
*   `/hubs/miami-fort-lauderdale`
*   `/hubs/brazil`
*   `/hubs/europe` (Italia / UK)
*(Alternativa: una sola página `/global-presence` con secciones fuertes por región)*

---

## 5) Keywords Prioritarias (por intención)

### Marca (Defensa)
*   Segue Yachts
*   Segue + modelos
*   Segue Argentina / Segue Global

### Intención Alta (Regional/Global)
*   luxury yacht builder argentina
*   premium yacht shipyard
*   yacht builder south america
*   yacht construction argentina
*   custom yacht builder

### Hubs Argentina
*   yates delta tigre
*   astillero tigre
*   yates nordelta
*   astillero zona norte
*   yates rosario
*   yates entre ríos
*   yates corrientes

### Florida
*   yacht builder miami
*   yacht builder fort lauderdale
*   custom yachts florida

### Brasil / Europa
*   luxury yacht builder brazil
*   yacht builder italy / uk (como autoridad)

---

## 6) On-Page SEO (Standard por página)

*   **Title único:** 55–60 caracteres.
*   **Meta description:** 140–160 caracteres (CTA suave).
*   **H1 único**
*   **H2 por secciones**
*   **Contenido:** 500–1.000 palabras reales (no relleno).
*   **CTA Principal**
*   **Imágenes:** Alt text descriptivo + contexto (ej: “Luxury yacht construction – Delta Tigre”).

---

## 7) SEO Local & Hubs

### A. Google Business Profile (Argentina)
*   Categoría: *Boat Builder / Shipyard*
*   Dirección real
*   Fotos reales
*   Publicaciones periódicas
*   Solicitar reseñas reales

### B. Páginas de hubs
*   Contexto local (no solo keywords).
*   Qué hace Segue ahí (clientes, entregas, presencia, logística).
*   CTA: visita / consulta.

---

## 8) Arquitectura Futura (Sitio Principal)

**Regla clave:** NO quemar ahora las URLs definitivas de modelos.
Reservar para `segueyachts.com`:
*   `/models/x4`
*   `/models/68`
*   Categorías: Fly, Sport, Custom.

**En Discover:**
*   Mantener modelos dentro de la one-page.
*   O usar rutas tipo `/discover/x4` (si es estrictamente necesario).

---

## 9) Checklist Técnico SEO – Next.js / Vercel

*   ✅ **Canonical:** Hacia `https://discover.segueyachts.com`
*   ✅ **Redirects:** 301 desde vercel.app a discover.
*   ✅ **Metadata:** Por página (no genérica).
*   ✅ **Sitemap.xml:** Con todas las páginas reales.
*   ✅ **Robots.txt:** Referencia al sitemap.
*   **Schema:**
    *   ✅ Organization
    *   LocalBusiness (en shipyard/contact)
    *   PostalAddress
    *   GeoCoordinates
    *   ContactPoint
    *   sameAs
*   ✅ **Open Graph:** Etiquetas completas con imágenes premium.
*   **Performance:** `next/image`, Video hero optimizado, CLS mínimo.
*   **i18n:** Definir EN/ES solo si ambas están completas. Hreflang a futuro.

---

## 10) Link Building & Autoridad (90 días)
**Objetivo:** 10–20 enlaces relevantes.
*   Marinas y clubes náuticos
*   Medios náuticos
*   Eventos/ferias
*   Proveedores y partners
*   PR (notas sobre proyectos, entregas, innovación)

---

## 11) Roadmap

### 0–30 días
*   Crear páginas satélite.
*   Google Business Profile optimizado.
*   Metadata y schema completos.
*   Redirects y canonical.

### 30–60 días
*   Contenido de hubs.
*   Primeras acciones PR / enlaces.
*   Optimización según Search Console.

### 60–90 días
*   Refuerzo de autoridad.
*   Preparar transición a sitio principal.
*   Definir redirects futuros.

---

**Nota estratégica final:**
`Discover` es fachada + autoridad + hubs, no catálogo final. El SEO fuerte de modelos se hace en `segueyachts.com` cuando el contenido esté listo, con arquitectura tipo Azimut.

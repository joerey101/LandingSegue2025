# 🚀 Instrucciones de Despliegue - Segue 2026

## Estado Actual
✅ Repositorio Git inicializado
✅ Todos los archivos committed (incluyendo video Segue-X6.mp4)
✅ Proyecto Next.js listo para producción

## Pasos para Desplegar

### 1. Crear Repositorio en GitHub

1. Ve a: https://github.com/new
2. Nombre del repositorio: `segue-2026-next`
3. Descripción: "Segue Yachts 2026 - Next.js Landing Page"
4. **NO marques** "Initialize this repository with a README"
5. Click en "Create repository"

### 2. Conectar y Subir el Código

Después de crear el repositorio, GitHub te mostrará instrucciones. Usa estos comandos en la terminal:

```bash
cd "/Users/joserey/Documents/@Trabajo/AI/SEGUE 2026/segue-2026-next"

# Reemplaza TU_USUARIO con tu nombre de usuario de GitHub
git remote add origin https://github.com/TU_USUARIO/segue-2026-next.git

# Subir el código
git branch -M main
git push -u origin main
```

**Nota:** Si te pide autenticación, usa tu Personal Access Token de GitHub, no tu contraseña.

### 3. Desplegar en Vercel

#### Opción A: Desde la Interfaz Web de Vercel (Recomendado)

1. Ve a: https://vercel.com/new
2. Inicia sesión con tu cuenta
3. Click en "Import Git Repository"
4. Selecciona el repositorio `segue-2026-next`
5. Configuración del proyecto:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `npm run build` (se detecta automáticamente)
   - **Output Directory:** `.next` (se detecta automáticamente)
6. Click en "Deploy"

#### Opción B: Desde la Terminal (si se resuelven los problemas de SSL)

```bash
npx vercel --prod
```

### 4. Verificar el Despliegue

Una vez desplegado, Vercel te dará una URL como:
- `https://segue-2026-next.vercel.app`
- O tu dominio personalizado si ya lo configuraste

Verifica que:
- ✅ El video hero se reproduce correctamente
- ✅ Todas las imágenes del carrusel se ven
- ✅ La imagen de fondo en la sección Legacy aparece
- ✅ El sitio es responsive en móvil

## Archivos Importantes Incluidos

- **Video Hero:** `public/Segue-X6.mp4` (89 MB)
- **Imágenes Carrusel:** `public/fotos-carrusel/` (X6, XS5, XS6)
- **Background Legacy:** `public/legacy-bg.avif`
- **Logo:** `public/Segue-logo.svg`
- **Fuentes:** `app/fonts/RivieraNightsTrial-*.otf`

## Solución de Problemas

### Si el video no se reproduce en Vercel:
1. Vercel tiene un límite de 100MB para archivos individuales en el plan gratuito
2. El video Segue-X6.mp4 es de 89MB, está dentro del límite
3. Si hay problemas, considera comprimir el video o usar un CDN externo

### Si las imágenes no se ven:
1. Verifica que las rutas en el código usen `/` al inicio (ej: `/Segue-logo.svg`)
2. Revisa la consola del navegador para errores 404
3. Asegúrate de que todos los archivos estén en la carpeta `public/`

### Si el build falla:
1. Revisa los logs en el dashboard de Vercel
2. Verifica que todas las dependencias estén en `package.json`
3. Ejecuta `npm run build` localmente para detectar errores

## Comandos Útiles

```bash
# Ver el estado del repositorio
git status

# Ver los commits
git log --oneline

# Actualizar el despliegue después de cambios
git add .
git commit -m "Descripción de los cambios"
git push

# Vercel re-desplegará automáticamente
```

## Contacto y Soporte

Si tienes problemas con el despliegue, puedes:
1. Revisar los logs en: https://vercel.com/dashboard
2. Consultar la documentación: https://nextjs.org/docs/deployment
3. Verificar el estado de Vercel: https://www.vercel-status.com/

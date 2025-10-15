# Cafetería La Esquina

Proyecto demo:

Contenido:

- `index.html`, `about.html`, `menu.html`, `contact.html` - páginas principales
- `styles.css` - estilos globales
- `script.js` - inicializador y comportamientos comunes
- `js/` - estructura MVC ligera: `models.js`, `views.js`, `controllers.js`
- `assets/` - imágenes vectoriales de ejemplo

Instrucciones rápidas

1. Abrir localmente: simplemente abre `index.html` en el navegador.

2. Inicializar git y hacer commit:

   En PowerShell (Windows):

   ```powershell
   cd "C:\Users\Bryan_Noboa\Desktop\PROYECTOS\project1.0.0"
   git init
   git add .
   git commit -m "Proyecto demo: Cafetería La Esquina"
   ```

3. Subir a GitHub:

   - Crear un nuevo repositorio en GitHub (ej: `cafeteria-la-esquina`), sin README ni .gitignore.
   - Conectar remoto y pushear:

   ```powershell
   git remote add origin https://github.com/<tu-usuario>/<tu-repo>.git
   git branch -M main
   git push -u origin main
   ```

4. Publicar en GitHub Pages:

   - En la configuración del repo (Settings → Pages) seleccionar la rama `main` y la carpeta `/ (root)`, guardar.
   - Esperar unos minutos y la página estará disponible en `https://<tu-usuario>.github.io/<tu-repo>/`.

Notas de personalización

- Cambia textos, colores, logo e imágenes por tu propio contenido.
- Si quieres un backend para el formulario, puedo añadir un ejemplo con Formspree o Netlify Forms.

Arquitectura (MVC ligera)

- models.js: contiene datos y lógica de acceso (aquí datos estáticos para demo).
- views.js: funciones que generan fragmentos HTML reutilizables (header/footer, tarjetas de menú).
- controllers.js: inyecta la 'shell' (header/footer) y renderiza vistas según la página.

Estructura recomendada para el portafolio en Workana

- Añade la URL pública (GitHub Pages) y el link al repositorio.
- Muestra capturas responsive (desktop y móvil) y explica qué tecnologías usaste (HTML, CSS, JS vanilla, patrón MVC ligero).

Si quieres, puedo:

- Añadir Formspree para enviar mensajes sin backend.
- Mejorar paleta de colores y accesibilidad (contrastes, tamaños de fuente).
- Preparar una rama `gh-pages` o añadir acciones de GitHub para deploy automático.

Administración (demo)

He añadido un panel de administración básico para demo en `admin.html`.

- Usuario demo: `admin` / contraseña: `admin123` (cámbialo antes de usar en producción).
- El panel permite crear/editar/eliminar items del menú y ver/eliminar reservas.
- Persistencia: los cambios se guardan en `localStorage` (clave `le_menu_v1` y `le_reservations_v1`) para que puedas probar sin backend.

Imágenes y assets

He añadido una carpeta `assets/images/` con 'placeholders' (SVG). Nombres y sugerencias:

- `assets/images/hero-placeholder.svg` — Imagen principal (reemplaza por `hero.jpg` o `hero.webp`).
- `assets/images/coffee-shop-1.svg` — interior-1.jpg (foto interior)
- `assets/images/pastries-1.svg` — pastries-1.jpg (repostería)
- `assets/images/barista-1.svg` — barista-1.jpg (barista)
- `assets/images/product-1.svg` — product-1.jpg (platos)
- `assets/images/table-1.svg` — table-1.jpg (mesa/ambiente)

Reemplaza esos archivos por fotos reales (Unsplash o Pexels: busca "coffee shop interior", "pastries", "barista"). Mantén nombres o ajusta la ruta en los items del menú.

Validación y seguridad

- Los formularios incluyen validación básica de campos obligatorios.
- El login es demo y NO es seguro para producción; para producción debes implementar autenticación real y un backend.

Siguientes pasos sugeridos

- Añadir un archivo `LICENSE` y `CONTRIBUTING` si lo necesitas.
- Añadir una sección "Proyectos" para mostrar más trabajos.
- Crear una rama `gh-pages` si prefieres publicar desde allí.

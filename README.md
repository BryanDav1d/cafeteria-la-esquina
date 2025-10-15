# Cafetería La Esquina — Demo para perfil Workana

Proyecto demo: página estática profesional para usar en tu portafolio de Workana.

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

Siguientes pasos sugeridos

- Añadir un archivo `LICENSE` y `CONTRIBUTING` si lo necesitas.
- Añadir una sección "Proyectos" para mostrar más trabajos.
- Crear una rama `gh-pages` si prefieres publicar desde allí.

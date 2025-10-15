# Cafetería La Esquina — Demo para perfil Workana

Proyecto demo: página estática profesional para usar en tu portafolio de Workana.

Contenido:
- `index.html` - página principal
- `styles.css` - estilos
- `script.js` - scripts mínimos
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

Siguientes pasos sugeridos

- Añadir un archivo `LICENSE` y `CONTRIBUTING` si lo necesitas.
- Añadir una sección "Proyectos" para mostrar más trabajos.
- Crear una rama `gh-pages` si prefieres publicar desde allí.

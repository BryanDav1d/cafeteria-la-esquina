// Pequeños comportamientos: año y envío de formulario (no hay backend)
document.addEventListener('DOMContentLoaded', function(){
  // Inyectar header/footer y renderizar contenido según la página
  Controllers.injectShell();
  const page = document.body.dataset.page;
  if(page === 'home'){
    Controllers.renderMenuPreview();
  } else if(page === 'menu'){
    Controllers.renderMenuPage();
  }

  // Form handler (si existe)
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // validación mínima
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      if(!name || !email){
        alert('Por favor complete nombre y email.');
        return;
      }
      alert('Gracias — su mensaje se ha enviado (demo).');
      form.reset();
    });
  }
});
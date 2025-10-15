// Pequeños comportamientos: año y envío de formulario (no hay backend)
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('year').textContent = new Date().getFullYear();
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Gracias — su mensaje se ha enviado (demo).');
    form.reset();
  });
  // toggle simple menu for small screens
  const btn = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  btn && btn.addEventListener('click', ()=>{
    nav.classList.toggle('open');
  });
});
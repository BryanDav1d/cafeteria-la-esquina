// Controller: conecta modelos y vistas
const Controllers = (function(){
  function injectShell(){
    const headerEl = document.getElementById('site-header');
    const footerEl = document.getElementById('site-footer');
    if(headerEl) headerEl.innerHTML = Views.header();
    if(footerEl) footerEl.innerHTML = Views.footer();
    // year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
    // nav toggle
    const btn = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    btn && btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  }

  function renderMenuPreview(){
    const target = document.getElementById('menuPreview');
    if(!target) return;
    const list = MenuModel.all().slice(0,3);
    target.innerHTML = Views.menuList(list);
  }

  function renderMenuPage(){
    const target = document.getElementById('menuList');
    if(!target) return;
    const list = MenuModel.all();
    target.innerHTML = Views.menuList(list);
  }

  function renderHomeExtras(){
    // testimonials and gallery on home page
    const ttarget = document.getElementById('testimonials');
    if(ttarget) ttarget.innerHTML = Views.testimonials(MenuModel.testimonials());
    const gtarget = document.getElementById('gallery');
    if(gtarget) gtarget.innerHTML = Views.gallery(MenuModel.gallery());
  }

  function animateOnScroll(){
    const items = document.querySelectorAll('.fade-up');
    const io = new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting) entry.target.classList.add('in-view');
      });
    }, {threshold:0.12});
    items.forEach(i=>io.observe(i));
  }

  return { injectShell, renderMenuPreview, renderMenuPage, renderHomeExtras, animateOnScroll };
})();

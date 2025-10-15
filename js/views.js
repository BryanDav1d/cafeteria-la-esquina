// Views: funciones que generan HTML
const Views = (function(){
  function header(){
    return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="index.html" class="logo"><img src="assets/logo.svg" alt="La Esquina logo" height="48"></a>
        <nav class="nav">
          <a href="about.html">Nosotros</a>
          <a href="menu.html">Menú</a>
          <a href="contact.html">Contacto</a>
        </nav>
        <button class="nav-toggle" aria-label="Abrir menú">☰</button>
      </div>
    </header>`;
  }

  function footer(){
    return `<footer class="site-footer"><div class="container"><small>© <span id="year"></span> Cafetería La Esquina</small></div></footer>`;
  }

  function menuList(items){
  return items.map(it=>`<article class="card fade-up"><div class="media"><img src="${it.img||'assets/hero.svg'}" alt="${it.title}"/></div><div class="card-body"><h3>${it.title}</h3><p>${it.desc}</p><p class="muted">${it.price}</p></div></article>`).join('');
  }

  function testimonials(list){
    return `<div class="testimonials">${list.map(t=>`<blockquote class="quote fade-up"><p>"${t.text}"</p><footer>— ${t.name}</footer></blockquote>`).join('')}</div>`;
  }

  function gallery(list){
    return `<div class="gallery">${list.map(g=>`<figure class="fade-up"><img src="${g.img}" alt="${g.alt}"><figcaption>${g.alt}</figcaption></figure>`).join('')}</div>`;
  }

  return { header, footer, menuList };
})();

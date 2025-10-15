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
    return items.map(it=>`<article class="card"><h3>${it.title}</h3><p>${it.desc}</p><p class="muted">${it.price}</p></article>`).join('');
  }

  return { header, footer, menuList };
})();

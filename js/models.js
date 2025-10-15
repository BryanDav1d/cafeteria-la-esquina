// Model: datos estáticos para el demo
const MenuModel = (function(){
  const STORAGE_KEY = 'le_menu_v1';
  const RESERVATION_KEY = 'le_reservations_v1';

  // Por defecto esperamos imágenes JPG en assets/images/ con los nombres indicados.
  // Simplemente copia tus archivos JPG a assets/images/ manteniendo estos nombres
  // (o cambia la ruta en el admin).
  const defaultItems = [
    {id:1, title:'Café espresso', desc:'Rico y concentrado. Taza pequeña, intenso.', price:'$120', img:'assets/images/espresso.jpg'},
    {id:2, title:'Café filtrado', desc:'Notas florales y afrutadas. 250ml.', price:'$150', img:'assets/images/filter.jpg'},
    {id:3, title:'Latte de temporada', desc:'Leche espumada y sirope casero.', price:'$180', img:'assets/images/latte.jpg'},
    {id:4, title:'Tarta de limón', desc:'Masa casera y merengue dorado.', price:'$280', img:'assets/images/pie.jpg'},
    {id:5, title:'Brownie chocolate', desc:'Chocolate 70% con nueces.', price:'$240', img:'assets/images/brownie.jpg'},
    {id:6, title:'Sándwich vegetariano', desc:'Pan artesanal, verduras grilladas.', price:'$320', img:'assets/images/sandwich.jpg'}
  ];

  // cargar desde localStorage o inicializar
  let items = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultItems.slice();
  let reservations = JSON.parse(localStorage.getItem(RESERVATION_KEY)) || [];

  const testimonials = [
    {id:1, name:'María López', text:'El mejor café de la ciudad, ambiente perfecto para trabajar.'},
    {id:2, name:'Carlos Méndez', text:'Repostería increíble y servicio muy amable.'},
    {id:3, name:'Lucía Gómez', text:'Lugar acogedor, perfecto para reuniones y encuentros.'}
  ];

  const gallery = [
    {id:1, img:'assets/gallery1.svg', alt:'Interior cafetería'},
    {id:2, img:'assets/gallery2.svg', alt:'Tabla de repostería'},
    {id:3, img:'assets/gallery3.svg', alt:'Barista preparando café'}
  ];
  function save(){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    localStorage.setItem(RESERVATION_KEY, JSON.stringify(reservations));
  }

  return {
    all: ()=>items,
    getById: (id)=>items.find(i=>i.id===id),
    add: (data)=>{ const id = Date.now(); items.push(Object.assign({id:id}, data)); save(); return id; },
    update: (id, data)=>{ const idx = items.findIndex(i=>i.id===id); if(idx>-1){ items[idx]=Object.assign(items[idx], data); save(); return true;} return false; },
    remove: (id)=>{ items = items.filter(i=>i.id!==id); save(); },
    testimonials: ()=>testimonials,
    gallery: ()=>gallery,
    // reservations
    reservations: ()=>reservations,
    addReservation: (r)=>{ r.id = Date.now(); reservations.push(r); save(); return r.id; },
    removeReservation: (id)=>{ reservations = reservations.filter(r=>r.id!==id); save(); }
  };
})();

// Otros modelos futuros pueden exportarse aquí

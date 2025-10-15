// Model: datos estáticos para el demo
const MenuModel = (function(){
  const items = [
    {id:1, title:'Café espresso', desc:'Rico y concentrado. Taza pequeña, intenso.', price:'$120', img:'assets/espresso.svg'},
    {id:2, title:'Café filtrado', desc:'Notas florales y afrutadas. 250ml.', price:'$150', img:'assets/filter.svg'},
    {id:3, title:'Latte de temporada', desc:'Leche espumada y sirope casero.', price:'$180', img:'assets/latte.svg'},
    {id:4, title:'Tarta de limón', desc:'Masa casera y merengue dorado.', price:'$280', img:'assets/pie.svg'},
    {id:5, title:'Brownie chocolate', desc:'Chocolate 70% con nueces.', price:'$240', img:'assets/brownie.svg'},
    {id:6, title:'Sándwich vegetariano', desc:'Pan artesanal, verduras grilladas.', price:'$320', img:'assets/sandwich.svg'}
  ];

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
  return {
    all: ()=>items,
    getById: (id)=>items.find(i=>i.id===id),
    testimonials: ()=>testimonials,
    gallery: ()=>gallery
  };
})();

// Otros modelos futuros pueden exportarse aquí

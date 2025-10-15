// Model: datos estáticos para el demo
const MenuModel = (function(){
  const items = [
    {id:1, title:'Café espresso', desc:'Rico y concentrado. 30ml', price:'$120'},
    {id:2, title:'Café filtrado', desc:'Vainilla, caramelo según temporada', price:'$150'},
    {id:3, title:'Tarta de limón', desc:'Masa casera y merengue', price:'$280'},
    {id:4, title:'Bocaditos salados', desc:'Opciones veganas y sin gluten', price:'$220'}
  ];
  return {
    all: ()=>items,
    getById: (id)=>items.find(i=>i.id===id)
  };
})();

// Otros modelos futuros pueden exportarse aquí

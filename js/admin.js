// Admin panel script (demo)
document.addEventListener('DOMContentLoaded', ()=>{
  const loginForm = document.getElementById('loginForm');
  const menuForm = document.getElementById('menuForm');
  const loginSection = document.getElementById('loginSection');
  const adminPanel = document.getElementById('adminPanel');
  const menuAdminList = document.getElementById('menuAdminList');
  const reservationsList = document.getElementById('reservationsList');
  const logoutBtn = document.getElementById('logoutBtn');

  // ahora usamos API.login; si no disponible usamos demo local
  function showAdmin(){
    loginSection.style.display = 'none';
    adminPanel.style.display = 'block';
    renderMenuAdmin();
    renderReservations();
  }

  loginForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const user = loginForm.user.value.trim();
    const pass = loginForm.pass.value.trim();
    try{
      const res = await API.login(user,pass);
      API.storeToken(res.token);
      showAdmin();
    }catch(err){
      // fallback demo: check local admin
      if(user==='admin' && pass==='admin123'){ showAdmin(); }
      else alert('Credenciales inválidas');
    }
  });

  menuForm.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const id = menuForm.id.value ? parseInt(menuForm.id.value,10) : null;
    const data = { title: menuForm.title.value.trim(), desc: menuForm.desc.value.trim(), price: menuForm.price.value.trim(), img: menuForm.img.value.trim() };
    if(!data.title || !data.desc || !data.price){ alert('Complete todos los campos'); return; }
    const token = API.getToken();
    try{
      if(id){ await API.updateMenu(id,data,token); }
      else { await API.createMenu(data,token); }
      menuForm.reset();
      renderMenuAdmin();
      alert('Guardado (servidor)');
    }catch(err){
      // fallback local
      if(id){ MenuModel.update(id,data); } else { MenuModel.add(data); }
      menuForm.reset(); renderMenuAdmin(); alert('Guardado (local)');
    }
  });

  async function renderMenuAdmin(){
    menuAdminList.innerHTML = '<p>Cargando...</p>';
    const token = API.getToken();
    try{
      const items = await API.getMenu();
      menuAdminList.innerHTML = items.map(it=>`<div class="admin-item"><strong>${it.title}</strong> — ${it.price} <div class="muted">${it.description}</div><div><button class="btn edit" data-id="${it.id}">Editar</button> <button class="btn outline delete" data-id="${it.id}">Eliminar</button></div></div>`).join('');
      menuAdminList.querySelectorAll('.delete').forEach(b=>b.addEventListener('click', async ev=>{ const id = parseInt(ev.target.dataset.id,10); if(confirm('Eliminar item?')){ try{ await API.deleteMenu(id,token); renderMenuAdmin(); }catch(e){ MenuModel.remove(id); renderMenuAdmin(); } }}));
      menuAdminList.querySelectorAll('.edit').forEach(b=>b.addEventListener('click', async ev=>{ const id = parseInt(ev.target.dataset.id,10); const it = (await API.getMenu()).find(x=>x.id==id) || MenuModel.getById(id); menuForm.id.value=it.id; menuForm.title.value=it.title; menuForm.desc.value=it.description||it.desc; menuForm.price.value=it.price; menuForm.img.value=it.img; }));
    }catch(err){
      // fallback local
      const items = MenuModel.all();
      menuAdminList.innerHTML = items.map(it=>`<div class="admin-item"><strong>${it.title}</strong> — ${it.price} <div class="muted">${it.desc}</div><div><button class="btn edit" data-id="${it.id}">Editar</button> <button class="btn outline delete" data-id="${it.id}">Eliminar</button></div></div>`).join('');
      menuAdminList.querySelectorAll('.delete').forEach(b=>b.addEventListener('click', ev=>{ const id = parseInt(ev.target.dataset.id,10); if(confirm('Eliminar item?')){ MenuModel.remove(id); renderMenuAdmin(); }}));
      menuAdminList.querySelectorAll('.edit').forEach(b=>b.addEventListener('click', ev=>{ const id = parseInt(ev.target.dataset.id,10); const it = MenuModel.getById(id); menuForm.id.value=it.id; menuForm.title.value=it.title; menuForm.desc.value=it.desc; menuForm.price.value=it.price; menuForm.img.value=it.img; }));
    }
  }

  async function renderReservations(){
    reservationsList.innerHTML = '<p>Cargando...</p>';
    const token = API.getToken();
    try{
      const r = await API.getReservations(token);
      if(r.length===0) reservationsList.innerHTML = '<p>No hay reservas</p>';
      else reservationsList.innerHTML = r.map(rs=>`<div class="admin-item"><strong>${rs.name}</strong> — ${rs.date} ${rs.time} <div>${rs.people} persona(s)</div><div>${rs.note||''}</div><div><button class="btn outline deleteRes" data-id="${rs.id}">Eliminar</button></div></div>`).join('');
      reservationsList.querySelectorAll('.deleteRes').forEach(b=>b.addEventListener('click', async ev=>{ const id = parseInt(ev.target.dataset.id,10); if(confirm('Eliminar reserva?')){ try{ await API.deleteReservation(id,token); renderReservations(); }catch(e){ MenuModel.removeReservation(id); renderReservations(); } }));
    }catch(err){
      const r = MenuModel.reservations();
      if(r.length===0) reservationsList.innerHTML = '<p>No hay reservas</p>';
      else reservationsList.innerHTML = r.map(rs=>`<div class="admin-item"><strong>${rs.name}</strong> — ${rs.date} ${rs.time} <div>${rs.people} persona(s)</div><div>${rs.note||''}</div><div><button class="btn outline deleteRes" data-id="${rs.id}">Eliminar</button></div></div>`).join('');
      reservationsList.querySelectorAll('.deleteRes').forEach(b=>b.addEventListener('click', ev=>{ const id = parseInt(ev.target.dataset.id,10); if(confirm('Eliminar reserva?')){ MenuModel.removeReservation(id); renderReservations(); }}));
    }
  }

  logoutBtn.addEventListener('click', ()=>{ adminPanel.style.display='none'; loginSection.style.display='block'; });
});

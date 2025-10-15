// Simple API wrapper for backend
const API = (function(){
  const BASE = 'http://localhost:3001/api';
  function handleRes(res){ if(!res.ok) return res.json().then(e=>{ throw e; }); return res.json(); }
  return {
    login: (user,pass)=> fetch(BASE + '/login', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:user,password:pass})}).then(handleRes),
    getMenu: ()=> fetch(BASE + '/menu').then(handleRes),
    createMenu: (data, token)=> fetch(BASE + '/menu', {method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify(data)}).then(handleRes),
    updateMenu: (id,data,token)=> fetch(BASE + '/menu/'+id, {method:'PUT',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify(data)}).then(handleRes),
    deleteMenu: (id,token)=> fetch(BASE + '/menu/'+id, {method:'DELETE',headers:{'Authorization':'Bearer '+token}}).then(handleRes),
    getReservations: (token)=> fetch(BASE + '/reservations', {headers: token?{'Authorization':'Bearer '+token}:{}}).then(handleRes),
    createReservation: (data)=> fetch(BASE + '/reservations', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)}).then(handleRes),
    deleteReservation: (id,token)=> fetch(BASE + '/reservations/'+id, {method:'DELETE',headers:{'Authorization':'Bearer '+token}}).then(handleRes),
    storeToken: (t)=> localStorage.setItem('le_token', t),
    getToken: ()=> localStorage.getItem('le_token')
  };
})();

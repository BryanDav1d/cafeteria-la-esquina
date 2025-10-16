const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./db');
const app = express();
const SECRET = 'dev_secret_change_me';

app.use(cors());
app.use(bodyParser.json());

// Auth
app.post('/api/login', (req,res)=>{
  const { username, password } = req.body;
  if(!username || !password) return res.status(400).json({error:'missing'});
  db.get(`SELECT * FROM users WHERE username = ?`, [username], (err,row)=>{
    if(err) return res.status(500).json({error: 'db'});
    if(!row) return res.status(401).json({error:'invalid'});
    bcrypt.compare(password, row.password, (err,ok)=>{
      if(err) return res.status(500).json({error:'bcrypt'});
      if(!ok) return res.status(401).json({error:'invalid'});
      const token = jwt.sign({id:row.id, username:row.username}, SECRET, {expiresIn:'8h'});
      res.json({token});
    });
  });
});

// Middleware auth
function auth(req,res,next){
  const h = req.headers.authorization;
  if(!h) return res.status(401).json({error:'no auth'});
  const token = h.replace('Bearer ','');
  jwt.verify(token, SECRET, (err,decoded)=>{
    if(err) return res.status(401).json({error:'invalid token'});
    req.user = decoded; next();
  });
}

// Menu endpoints
app.get('/api/menu', (req,res)=>{
  db.all(`SELECT * FROM menu ORDER BY id`, [], (err,rows)=>{ if(err) return res.status(500).json({error:'db'}); res.json(rows); });
});

app.post('/api/menu', auth, (req,res)=>{
  const { title, description, price, img } = req.body;
  db.run(`INSERT INTO menu (title,description,price,img) VALUES (?,?,?,?)`, [title,description,price,img], function(err){ if(err) return res.status(500).json({error:'db'}); res.json({id:this.lastID}); });
});

app.put('/api/menu/:id', auth, (req,res)=>{
  const id = req.params.id; const { title, description, price, img } = req.body;
  db.run(`UPDATE menu SET title=?,description=?,price=?,img=? WHERE id=?`, [title,description,price,img,id], function(err){ if(err) return res.status(500).json({error:'db'}); res.json({changes:this.changes}); });
});

app.delete('/api/menu/:id', auth, (req,res)=>{
  const id = req.params.id; db.run(`DELETE FROM menu WHERE id=?`, [id], function(err){ if(err) return res.status(500).json({error:'db'}); res.json({deleted:this.changes}); });
});

// Reservations (public)
app.get('/api/reservations', auth, (req,res)=>{ db.all(`SELECT * FROM reservations ORDER BY id DESC`,[], (err,rows)=>{ if(err) return res.status(500).json({error:'db'}); res.json(rows); }); });
app.post('/api/reservations', (req,res)=>{
  const { name,email,phone,date,time,people,note } = req.body;
  if(!name||!email||!date||!time||!people) return res.status(400).json({error:'missing'});
  db.run(`INSERT INTO reservations (name,email,phone,date,time,people,note) VALUES (?,?,?,?,?,?,?)`, [name,email,phone,date,time,people,note], function(err){ if(err) return res.status(500).json({error:'db'}); res.json({id:this.lastID}); });
});

// delete reservation (admin)
app.delete('/api/reservations/:id', auth, (req,res)=>{
  const id = req.params.id; db.run(`DELETE FROM reservations WHERE id=?`, [id], function(err){ if(err) return res.status(500).json({error:'db'}); res.json({deleted:this.changes}); });
});

// Serve static (optional)
app.use('/static', express.static(__dirname + '/../assets'));

// Serve frontend static files from project root
app.use('/', express.static(__dirname + '/..'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>console.log('Server listening on',PORT));
console.log('Serving frontend from project root. Open http://localhost:'+PORT+'/index.html');

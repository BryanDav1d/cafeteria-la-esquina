const sqlite3 = require('sqlite3');
const path = require('path');
const dbPath = path.join(__dirname, 'cafeteria.db');
const db = new sqlite3.Database(dbPath);

// Init tables if not exists
db.serialize(()=>{
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS menu (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    description TEXT,
    price TEXT,
    img TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS reservations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    phone TEXT,
    date TEXT,
    time TEXT,
    people INTEGER,
    note TEXT
  )`);

  // seed admin user if not exists (username: admin / password: admin123)
  db.get(`SELECT id FROM users WHERE username = ?`, ['admin'], (err,row)=>{
    if(err) return console.error(err);
    if(!row){
      const bcrypt = require('bcrypt');
      const pass = 'admin123';
      bcrypt.hash(pass, 10, (err, hash)=>{
        if(err) return console.error(err);
        db.run(`INSERT INTO users (username,password) VALUES (?,?)`, ['admin', hash]);
        console.log('Admin seeded (admin / admin123)');
      });
    }
  });
});

module.exports = db;

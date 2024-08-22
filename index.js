const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
    db.query('SELECT * FROM registro', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

app.post('/save-token', (req, res) => {
    const token = req.body.token;
    const sql = 'INSERT INTO tokens (token) VALUES (?)';
    db.query(sql, [token], (err, result) => {
      if (err) throw err;
      res.send('Token saved');
    });
  });  

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
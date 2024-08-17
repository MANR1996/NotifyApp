const express = require('express');
const app = express();
const db = require('./db');

app.use(express.json());

app.get('/datos', (req, res) => {
    db.query('SELECT * FROM registro', (error, results) => {
        if (error) {
            return res.status(500).json({ error: error.message });
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

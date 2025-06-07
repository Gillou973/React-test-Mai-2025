const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.post('/api/records', async (req, res) => {
  const { nom, prenom, adresse, email, telephone } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO personnes(nom, prenom, adresse, email, telephone, created_at) VALUES($1, $2, $3, $4, $5, NOW()) RETURNING *',
      [nom, prenom, adresse, email, telephone]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

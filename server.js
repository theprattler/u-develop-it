const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'Shaggy307!',
    database: 'election'
  },
  console.log('Connected to the election database.')
);

/*db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
})*/

// GET a single candidate
/*db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
  if (err) {
    console.log(err);
  }
  console.log(row);
});*/

// Delete a candidate
/*db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});*/

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
              VALUES (?,?,?,?)`;
const params = [8, 'Montague', 'Summers', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Catchall 404 error
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
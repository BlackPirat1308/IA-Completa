const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Connect to SQLite database
const db = new sqlite3.Database('./seo_manager.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to the SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS seo_data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      url TEXT NOT NULL,
      title TEXT,
      description TEXT,
      keywords TEXT
    )`);
  }
});

app.use(express.json());

// API routes
app.get('/api/seo-data', (req, res) => {
  db.all('SELECT * FROM seo_data', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.post('/api/seo-data', (req, res) => {
  const { url, title, description, keywords } = req.body;
  db.run(`INSERT INTO seo_data (url, title, description, keywords) VALUES (?, ?, ?, ?)`,
    [url, title, description, keywords],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({ id: this.lastID });
    });
});

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, '../dist/seo-manager')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/seo-manager/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Open http://localhost:${port} in your browser to view the application`);
});
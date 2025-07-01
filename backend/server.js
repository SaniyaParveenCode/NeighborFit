const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Load neighborhood data
const neighborhoods = require('./data/neighborhoods.json');

// Match endpoint
app.post('/api/match', (req, res) => {
  const prefs = req.body;
  const results = neighborhoods
    .map(n => {
      let score = 0;
      if (prefs.safety && n.safety >= 8) score++;
      if (prefs.affordable && n.rent <= 1500) score++;
      if (prefs.green && n.green_score >= 7) score++;
      return { ...n, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


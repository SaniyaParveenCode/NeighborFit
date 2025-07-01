import React, { useState } from 'react';
import './App.css';

function App() {
  const [criteria, setCriteria] = useState({
    safety: false,
    rent: true,
    green: true,
  });

  const neighborhoods = [
    { name: 'Greenview', safety: true, rent: true, green: true },
    { name: 'Sunny Heights', safety: false, rent: true, green: true },
    { name: 'Riverside', safety: false, rent: true, green: true },
    { name: 'Lakewood', safety: true, rent: false, green: false },
    { name: 'UrbanSide', safety: false, rent: false, green: false },
  ];

  const [matches, setMatches] = useState([]);

  const handleChange = (e) => {
    setCriteria(prev => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const scores = neighborhoods
      .map(n => {
        let score = 0;
        if (criteria.safety && n.safety) score++;
        if (criteria.rent && n.rent) score++;
        if (criteria.green && n.green) score++;
        return { name: n.name, score };
      })
      .sort((a, b) => b.score - a.score);
    setMatches(scores);
  };

  return (
    <div className="page-container">
      <div className="App">
        <h1>NeighborFit</h1>
        <form onSubmit={handleSubmit} className="criteria-form">
          <label>
            <input
              type="checkbox"
              name="safety"
              checked={criteria.safety}
              onChange={handleChange}
            />
            Safety
          </label>
          <label>
            <input
              type="checkbox"
              name="rent"
              checked={criteria.rent}
              onChange={handleChange}
            />
            Affordable Rent
          </label>
          <label>
            <input
              type="checkbox"
              name="green"
              checked={criteria.green}
              onChange={handleChange}
            />
            Green Spaces
          </label>
          <button type="submit">Find Neighborhoods</button>
        </form>

        <h3>Top Matches:</h3>
        <ul className="matches-list">
          {matches.map((match, idx) => (
            <li key={idx} className="match-item">
              <div className="match-header">
                <strong>{match.name}</strong>
                <span className="match-score">{match.score} / 3</span>
              </div>
              <div className="score-bar-bg">
                <div
                  className="score-bar-fill"
                  style={{ width: `${(match.score / 3) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// search.js
import React, { useState } from 'react';
import '../styles/index.css'; // Import index.css

const Search = () => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission (e.g., fetching user data)
  };

  return (
    <div className="app"> {/* Apply styles from index.css */}
      <h1>GitHub User Finder</h1>
      <form className="search-container" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Search;

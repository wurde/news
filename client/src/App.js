/**
 * Dependencies
 */

import React from 'react';

/**
 * Define component
 */

function App() {
  return (
    <div>
      <header>
        <h1>News</h1>
      </header>
      <main>
        <ol id="articles">
          <li className="article">
            <a href="#">Article #1</a>
          </li>
          <li className="article">
            <a href="#">Article #2</a>
          </li>
        </ol>
      </main>
    </div>
  );
}

/**
 * Export component
 */

export default App;

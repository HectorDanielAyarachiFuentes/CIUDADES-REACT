import React from 'react';

function AnotherPage() {
  return (
    <div className="app-container">
      <h1 className="heading">Another Page</h1>
      <div className="card retro-card">
        <p className="retro-text">This is another page with a retro web style.</p>
        <p className="retro-text">You've reached a new destination!</p>
        <Link to="/" className="retro-link">Go back to Home Page</Link>
      </div>
    </div>
  );
}

export default AnotherPage;

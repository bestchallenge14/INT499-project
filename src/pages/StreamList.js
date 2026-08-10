import React, { useState } from 'react';

function StreamList() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Input:", inputValue);
    setInputValue('');
  };

  return (
    <div className="page-container">
      <h2>My StreamList</h2>
      <form onSubmit={handleSubmit} className="stream-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a movie or show..."
          required
        />
        <button type="submit">
          <span className="material-icons">add_circle</span>
          Add to List
        </button>
      </form>
    </div>
  );
}

export default StreamList;
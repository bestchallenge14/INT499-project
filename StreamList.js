import React, { useState } from 'react';
import './StreamList.css'; // Assuming you have your CSS here

const StreamList = () => {
  const [inputValue, setInputValue] = useState('');
  const [streamList, setStreamList] = useState([]);

  // Add a new movie/show
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      setStreamList([...streamList, { id: Date.now(), text: inputValue, completed: false }]);
      setInputValue(''); // Clears the input once the submit button is selected
    }
  };

  // Delete an item
  const handleDelete = (id) => {
    setStreamList(streamList.filter(item => item.id !== id));
  };

  // Toggle completion status
  const handleComplete = (id) => {
    setStreamList(streamList.map(item => 
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  };

  // Edit an item
  const handleEdit = (id, newText) => {
    setStreamList(streamList.map(item => 
      item.id === id ? { ...item, text: newText } : item
    ));
  };

  return (
    <div className="streamlist-container">
      <h2>My StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Add a movie or show..." 
        />
        <button type="submit">
          <span className="material-icons">add_circle</span> Add
        </button>
      </form>

      <ul>
        {streamList.map((item) => (
          <li key={item.id} style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
            {item.text}
            <div className="actions">
              <button onClick={() => handleComplete(item.id)}>
                <span className="material-icons">check_circle</span>
              </button>
              <button onClick={() => {
                  const updatedText = prompt("Edit item:", item.text);
                  if (updatedText) handleEdit(item.id, updatedText);
                }}>
                <span className="material-icons">edit</span>
              </button>
              <button onClick={() => handleDelete(item.id)}>
                <span className="material-icons">delete</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
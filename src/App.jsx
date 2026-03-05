import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Sample Item 1', description: 'This is a sample item' },
    { id: 2, name: 'Sample Item 2', description: 'Another sample item' }
  ]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });

  const handleAddItem = (e) => {
    e.preventDefault();
    if (!newItem.name.trim() || !newItem.description.trim()) return;
    
    const itemToAdd = {
      id: Date.now(),
      ...newItem
    };
    
    setItems([...items, itemToAdd]);
    setNewItem({ name: '', description: '' });
  };

  return (
    <div className="container">
      <h1>Modern CRUD Dashboard</h1>
      
      <div className="glass-card fade-in">
        <form onSubmit={handleAddItem}>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
            />
          </div>
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Item Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">Add New Item</button>
        </form>
      </div>

      <div className="list-container">
        {items.map((item) => (
          <div key={item.id} className="glass-card item-card fade-in">
            <h3>{item.name}</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

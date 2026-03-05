import { useState } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Sample Item 1', description: 'This is a sample item' },
    { id: 2, name: 'Sample Item 2', description: 'Another sample item' }
  ]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editingFields, setEditingFields] = useState({ name: '', description: '' });

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

  const handleDeleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditingFields({ name: item.name, description: item.description });
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();
    if (!editingFields.name.trim() || !editingFields.description.trim()) return;

    setItems(items.map((item) => (
      item.id === editingId ? { ...item, ...editingFields } : item
    )));
    setEditingId(null);
    setEditingFields({ name: '', description: '' });
  };

  return (
    <div className="container" style={{ paddingBottom: '5rem' }}>
      <h1>Modern CRUD Dashboard</h1>

      {/* Create / Edit Form */}
      <div className="glass-card fade-in" style={{ marginBottom: '3rem' }}>
        <h2 style={{ marginBottom: '1.5rem', color: editingId ? 'var(--secondary-color)' : 'var(--primary-color)' }}>
          {editingId ? 'Edit Item' : 'Create New Item'}
        </h2>
        <form onSubmit={editingId ? handleUpdateItem : handleAddItem}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Item Name"
              value={editingId ? editingFields.name : newItem.name}
              onChange={(e) => editingId
                ? setEditingFields({ ...editingFields, name: e.target.value })
                : setNewItem({ ...newItem, name: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              placeholder="Item Description"
              value={editingId ? editingFields.description : newItem.description}
              onChange={(e) => editingId
                ? setEditingFields({ ...editingFields, description: e.target.value })
                : setNewItem({ ...newItem, description: e.target.value })
              }
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button type="submit" className="btn btn-primary" style={{ flex: 1 }}>
              {editingId ? 'Update Item' : 'Add Item'}
            </button>
            {editingId && (
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setEditingId(null)}
                style={{ flex: 1, background: 'rgba(255, 255, 255, 0.05)', color: 'white' }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* List Items */}
      <div className="list-container">
        {items.length === 0 && (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', opacity: 0.5, padding: '2rem' }}>
            No items found. Create one above!
          </p>
        )}
        {items.map((item) => (
          <div key={item.id} className="glass-card item-card fade-in">
            <h3 style={{ marginBottom: '0.5rem' }}>{item.name}</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', minHeight: '3rem' }}>
              {item.description}
            </p>
            <div className="item-actions">
              <button
                className="btn btn-primary"
                onClick={() => startEdit(item)}
                style={{ background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteItem(item.id)}
                style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App

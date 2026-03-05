import { useState } from 'react'
import './App.css'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

function App() {
  const [items, setItems] = useState([
    { id: 1, name: 'Nexus Hub', description: 'Centralized network management dashboard' },
    { id: 2, name: 'Quantum Vault', description: 'Secure encrypted storage for assets' }
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
      <h1>Universal CRUD Hub</h1>

      <ItemForm
        editingId={editingId}
        editingFields={editingFields}
        newItem={newItem}
        setEditingFields={setEditingFields}
        setNewItem={setNewItem}
        handleUpdateItem={handleUpdateItem}
        handleAddItem={handleAddItem}
        setEditingId={setEditingId}
      />

      <ItemList
        items={items}
        startEdit={startEdit}
        handleDeleteItem={handleDeleteItem}
      />
      <footer style={{
        marginTop: '5rem',
        textAlign: 'center',
        opacity: 0.5,
        fontSize: '0.8rem',
        borderTop: '1px solid var(--glass-border)',
        paddingTop: '2rem'
      }}>
        <p>&copy; 2026 Developed with React + Vite &bull; All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default App

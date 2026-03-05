import { useState } from 'react'
import './App.css'
import ItemForm from './components/ItemForm'
import ItemList from './components/ItemList'

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
    </div>
  )
}

export default App

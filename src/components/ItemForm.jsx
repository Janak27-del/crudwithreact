import React from 'react';

const ItemForm = ({ editingId, editingFields, newItem, setEditingFields, setNewItem, handleUpdateItem, handleAddItem, setEditingId }) => {
    return (
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
    );
};

export default ItemForm;

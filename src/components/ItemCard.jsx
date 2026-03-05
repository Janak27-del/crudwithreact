import React from 'react';

const ItemCard = ({ item, startEdit, handleDeleteItem }) => {
    return (
        <div className="glass-card item-card fade-in">
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
    );
};

export default ItemCard;

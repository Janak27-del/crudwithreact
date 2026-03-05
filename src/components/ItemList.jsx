import React from 'react';
import ItemCard from './ItemCard';

const ItemList = ({ items, startEdit, handleDeleteItem }) => {
    return (
        <div className="list-container">
            {items.length === 0 && (
                <p style={{ textAlign: 'center', gridColumn: '1 / -1', opacity: 0.5, padding: '2rem' }}>
                    No items found. Create one above!
                </p>
            )}
            {items.map((item) => (
                <ItemCard
                    key={item.id}
                    item={item}
                    startEdit={startEdit}
                    handleDeleteItem={handleDeleteItem}
                />
            ))}
        </div>
    );
};

export default ItemList;

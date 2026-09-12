import React from 'react';

export default function RestaurantMenu() {
  const menuItems = [
    { id: 1, name: "Burger", price: 650, category: "Fast Food" },
    { id: 2, name: "Pizza", price: 1200, category: "Fast Food" },
    { id: 3, name: "Biryani", price: 450, category: "Pakistani" },
    { id: 4, name: "Pasta", price: 800, category: "Italian" },
    { id: 5, name: "Sandwich", price: 500, category: "Snacks" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h2>1. Restaurant Menu</h2>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        {menuItems.map((item) => (
          <div key={item.id} style={{ border: '1px solid black', padding: '15px', width: '200px' }}>
            <h3>{item.name}</h3>
            <p><strong>Price:</strong> Rs. {item.price}</p>
            <p><strong>Category:</strong> {item.category}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span style={{ color: item.price > 1000 ? 'blue' : 'red', fontWeight: 'bold' }}>
                {item.price > 1000 ? "Premium" : "Regular"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
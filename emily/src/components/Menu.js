// src/components/Menu.js
import React from 'react';
import './Menu.css';

// Example menu data
const menuData = [
  {
    course: 'HORS D\'OEUVRES',
    title: 'Winter Squash Mini Tartlett',
    description: 'ricotta, carmelized onions, frizzled sage, honey drizzle'
  },
  {
    course: 'APPETIZERS',
    title: 'French Onion Soup',
    description: 'sourdough croutons and gruyere'
  },
  {
    course: 'APPETIZERS',
    title: 'Leafy Green Salad',
    description: 'lemon vinaigrette, pistachios, avocado, shaved parmesean, pomogranate'
  },
  {
    course: 'ENTREE',
    title: 'Heritage Roasted Chicken',
    description: 'herb aioli, salt, pepper, thyme, sesame seeds'
  },
  {
    course: 'ENTREE',
    title: 'Harissa & Honey Roasted Carrots and Parsnips',
    description: 'marinated in mild harissa and honey'
  },
  {
    course: 'DESSERT',
    title: 'Pears Poached in Beaujolais a la Mode',
    description: 'french vanilla ice cream, cinnamon chocolate sauce, sprinkle of pistachios'
  }
];

function Menu() {
  return (
    <div className="menu-background">
      <div className="menu-container">
        {/* Title and Ornamental Flourish */}
        {/* <h1 className="menu-heading">Menu</h1>
        <div className="menu-flourish" /> */}

        {/* List out courses */}
        {menuData.map((item, index) => (
          <div key={index} className="menu-section">
            {/* Only show course heading if it’s the first occurrence of that course */}
            {/* This ensures we group items by course without repeating heading each time. */}
            {(index === 0 || menuData[index].course !== menuData[index - 1].course) && (
              <h2 className="course-title">{item.course}</h2>
            )}
            <h3 className="dish-title">{item.title}</h3>
            <p className="dish-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;

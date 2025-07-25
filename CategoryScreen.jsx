import React from 'react';
// import '../assets/styles.css';

const CategoryScreen = ({ onSelectCategory }) => {
  return (
    <div id="category-screen">
      <h1>Flirt or Fib</h1>
      <div className="categories">
        <button data-category="popular" onClick={() => onSelectCategory('popular')}>Popular</button>
        <button data-category="teens" onClick={() => onSelectCategory('teens')}>Teens</button>
        <button data-category="party" onClick={() => onSelectCategory('party')}>Party</button>
        <button data-category="spicy" onClick={() => onSelectCategory('couple')}>Spicy</button>
        <button data-category="normal" onClick={() => onSelectCategory('normal')}>Normal</button>
      </div>
    </div>
  );
};

export default CategoryScreen;






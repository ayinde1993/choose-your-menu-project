import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCtategories = ['all', ...new Set(items.map((item)=>item.category))];
function App() {
  const [menuItems, setmenuItems] = useState(items);
  const [categories, setCategories] = useState(allCtategories);

  const filterItems = (category) => {
    if (category === 'all'){
      setmenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setmenuItems(newItems);
  }

  return (
  <main>
 <section className='menu section'>
  <div className='title'>
    <h2>Our Menu</h2>
    <div className='underline'></div>
  </div>
  <Categories filterItems={filterItems} categories={categories}/>
  <Menu items={menuItems} />
 </section>
  </main>
  );
}

export default App;

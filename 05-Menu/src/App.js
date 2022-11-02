import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))]
function App() {
  const [menuItem, setMenuItem] = useState(items)
  // const [activeBtn, setActiveBtn] = useState()
  const [categories, setCategories] = useState(allCategories)
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItem(items)
      return;
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItem(newItems)
  }
  return (
    <>
      <main>
        <section className='menu section'>
          <div className='title'>
            <h3>Our Menu</h3>
            <div className='underline'></div>
          </div>
          <Categories categories={categories} filter={filterItems} />
          <Menu item={menuItem} setitem={setMenuItem} />

        </section>
      </main>
    </>
  )
}

export default App;

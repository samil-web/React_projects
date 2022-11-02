import React from 'react';

const Menu = ({ item }) => {
  return (
    <div className='section-center'>
      {item.map((m) => {
        const { id, title, price, img, desc } = m
        return (
          <article key={id} className='menu-item'>
            <div>
              <img src={img} className='photo'></img>

              <div className='item-info'>
                <header>
                  <h4>{title}</h4>
                  <h4 className='price'>{price}</h4>
                </header>
                <p className='item-text'>{desc}</p>
              </div>
            </div>
          </article>
        )
      })}
    </div>
  )
};

export default Menu;

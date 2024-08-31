import React from 'react';
import PropTypes from 'prop-types';
import './expmenu.css';
import { menu_list } from '../../assets/assets';

const ExpMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Menu</h1>
      <p className='explore-menu-text'>
        Choose from a diverse Ethiopian menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item ) => {
          return (
            <div
              onClick={() => setCategory(prev => prev === item.menu_name ? 'All' : item.menu_name)}
              key={item.menu_name} // Use a unique key
              className="explore-menu-list-item"
            >
              <img className={category === item.menu_name ? 'active' : ''} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

// PropTypes for validation
ExpMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExpMenu;
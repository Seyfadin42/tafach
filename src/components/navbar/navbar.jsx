import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';


function Navbar({ setShowLogin}) {
  const [menu, setMenu] = useState('home');
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuClick = (menuItem) => {
    setMenu(menuItem);
    setMobileMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <div className='navbar'>
      <Link to='/' > <h2 className='logo'>ጣፋጭ</h2> </Link>
      <div className='navbar-toggle' onClick={toggleMobileMenu} aria-label="Toggle menu">
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
      <Link to='/' onClick={() => handleMenuClick('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
        <a  href='#explore-menu' onClick={() => handleMenuClick('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
        <a  href='#app-download'  onClick={() => handleMenuClick('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile</a>
        <a  href='#footer' onClick={() => handleMenuClick('contact-us')} className={menu === 'contact-us' ? 'active' : ''}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="Search" />
        <div className="navbar-search-icon">
          <Link to='/cart'> <img src={assets.basket_icon} alt="Basket" /></Link>
          <div className='dot'></div>
        </div>
        <button onClick={()=> setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
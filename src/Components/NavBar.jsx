import React, { useState, useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { BasketContext } from '../Contexts/basketContext';

function NavBar() {
  const {basket} = useContext(BasketContext)
  const [menuActive, setMenuActive] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="navbar-container">
      <div className="navbar mb-2">
        {isSmallScreen ? (
          <>
            <div className="menu-icon" onClick={toggleMenu}>
              {menuActive ? <FiX size={24} /> : <FiMenu size={24} />}
            </div>
            {menuActive && (
              <div className="dropdown-nav-menu">
                <h1>Cheshire Cleaning Supplies</h1>
                <Link to="/contact"><h2>Contact Us</h2></Link>
                <Link to="/products"><h2>Products</h2></Link>
                <Link to="/login"><h2>Login</h2></Link>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="left d-flex justify-content-around align-items-center">
              <h1>Cheshire Cleaning Supplies</h1>
              <Link to="/contact"><h2>Contact Us</h2></Link>
              <Link to="/products"><h2>Products</h2></Link>
            </div>
            <div className="right d-flex justify-content-end">
              <Link to="/basket"><h2>{basket.length}</h2></Link>
              <Link to="/login"><h2>Login</h2></Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;

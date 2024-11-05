import React, { useState, useContext } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { BasketContext } from '../Contexts/basketContext';
import { UserContext } from '../Contexts/userContext';

function NavBar() {
  const {basket} = useContext(BasketContext)
  const {user, setUser} = useContext(UserContext)
  const [menuActive, setMenuActive] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  console.log(user)

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLogout = () => {
    setUser(null)
  }

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
                {user ? (
                  <h2 onClick={handleLogout}>Logout</h2>
                ) : (
                  <Link to="/login"><h2>Login</h2></Link>
                )}
              </div>
            )}
          </>
        ) : (
          <>
            <div className="left d-flex justify-content-around align-items-center">
              <Link to="/"><h1>Cheshire Cleaning Supplies</h1></Link>
              <Link to="/contact"><h2>Contact Us</h2></Link>
              <Link to="/products"><h2>Products</h2></Link>
            </div>
            <div className="right d-flex justify-content-end">
              <Link to="/basket"><h2>Basket: {basket.length}</h2></Link>
                {user ? (
                  <div className="d-flex align-items-center justify-content-around">
                    <h2>Hi, {user.username}</h2>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                  </div>
                ) : (
                <Link to="/login"><h2>Login</h2></Link>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;

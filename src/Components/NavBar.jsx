import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function NavBar() {
  const [menuActive, setMenuActive] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  console.log(menuActive)

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
              <div className="dropdown-menu">
                <h1>Cheshire Cleaning Supplies</h1>
                <h2>Contact Us</h2>
                <h2>Products</h2>
                <h2>Login</h2>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="left d-flex justify-content-around align-items-center">
              <h1>Cheshire Cleaning Supplies</h1>
              <h2>Contact Us</h2>
              <h2>Products</h2>
            </div>
            <div className="right d-flex justify-content-end">
              <h2>Login</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;

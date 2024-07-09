import React from 'react'

function NavBar() {
  return (
    <div className='navbar d-flex justify-content-between'>
        <div className="left d-flex justify-content-around align-items-center">
            <h1>Cheshire Cleaning Supplies</h1>
            <h2>Contact Us</h2>
            <h2>Products</h2>
        </div>
        <div className="right d-flex justify-content-end">
            <h2>Login</h2>
        </div>
    </div>
  )
}

export default NavBar
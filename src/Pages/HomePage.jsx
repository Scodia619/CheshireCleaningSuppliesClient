import React from 'react'
import ownerPhoto from "../assets/ownerPhoto.jpg"
import logo from "../assets/logo.jpg"
import "../Styles/HomePage.css"

function HomePage() {
  return (
    <div className="homepage-container">
      <div className="images-container">
        <div className="photo-container">
          <img src={ownerPhoto} alt="Owner of the business" className="owner-photo" />
        </div>
        <div className="photo-container">
          <img src={logo} alt="Business Logo" className="logo-img" />
        </div>
      </div>
      <div className="business-description">
        <h1>Welcome to Cheshire Cleaning Supplies</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel magna et dui fermentum elementum. Curabitur facilisis mauris ac velit malesuada, ac luctus nunc gravida. Duis consequat nulla nec turpis vestibulum, ac faucibus elit fringilla. In vel risus vitae justo congue interdum. Nulla facilisi.</p>
      </div>
    </div>
  )
}

export default HomePage
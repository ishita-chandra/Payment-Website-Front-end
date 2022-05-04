import React from 'react'
import "./Header.css"
import abc from "../../assets/images/Group20399.svg"

function Header() {
  return (

    <div className="header">
      <div className="header_image_container">
        <img src={abc} alt="hrc" />
      </div>
      <div className="header_image_container">
        <img src="https://cdn-resources.highradius.com/resources/wp-content/uploads/2020/03/Highradius-logo.png" className="main_img" alt="hc" />
      </div>
    </div>
  )
}

export default Header
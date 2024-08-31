import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
function Footer() {
  return (
    <>
    <div className='footer' id='footer'>
<div className="footer-content">

<div className="footer-content-left">
  <img src='assets.logo' alt="" />
  <p>Welcome to our store, where you wll discover Ethiopian 
     exceptional selection of high-quality food, each 
     carefully curated to meet your needs and enhance your
      lifestyle, all while enjoying
     our friendly service and commitment to your satisfaction</p>
     <div className="footer-social-icons">
      <img src={assets.facebook_icon} alt="" />
      <img src={assets.linkedin_icon} alt="" />
      <img src={assets.twitter_icon} alt="" />
     </div>
</div>

<div className="footer-content-center">
  <h2>ጣፋጭ Company</h2>
  <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy police</li>
  </ul>
</div>

<div className="footer-content-right">
  <h2>GET IN TOUCH</h2>
  <ul>
    <li>+251 942435009</li>
    <li>contact me at https://t.me/seyfitti</li>
  </ul>
</div>
</div>
</div>
<hr />
<h4>developed by Seyfadin Abdela</h4>
<p className="footer-copyright">copyright at ጣፋጭ  </p>
 </>
  )
}

export default Footer
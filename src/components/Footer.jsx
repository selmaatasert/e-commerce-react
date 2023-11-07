import React from 'react';
import '../styles/Footer.css'; 
import { Link } from 'react-router-dom';
import { FaPhone, FaGift, FaBuilding, FaCreditCard } from 'react-icons/fa';
import { AiOutlineCar } from "react-icons/ai";
import visa from '../components/assets/visa.png'
import master from '../components/assets/master.png'
import paypal from '../components/assets/PayPal.png'
import bitcoin from '../components/assets/Bitcoin.png'

class Footer extends React.Component {
  render () {
    return (  
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className='h2-footer'><FaPhone />Help & Contact</h2>
          <ul className='ul-footer'>
            <li><a href="#">Paying by invoice</a></li>
            <li><a href="#">Track your parcel</a></li>
            <li><a href="#">Report a damaged item</a></li>
            <li><a href="#">Delivery information</a></li>
            <li><a href="#">Return an order</a></li>
            <li><a href="#">Find the right size</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className='h2-footer'><FaGift />Gift Cards</h2>
          <ul className='ul-footer'>

            <li><a href="#">Buy Gift Cards</a></li>
            <li><a href="#">About gift cards and vouchers</a></li>
            <li><a href="#">Redeem a Gift Card</a></li>
            <li><a href="#">Corporate Gift Cards</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className='h2-footer'><FaBuilding />About us</h2>
          <ul className='ul-footer'>
          <Link to="/about">Visit our corporate site</Link>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>

        <div className="footer-section">

          <h2 className='h2-footer'><AiOutlineCar />Our services</h2>
          <ul className='ul-footer'>
            <li><a href="#">Connect your stores</a></li>
            <li><a href="#">Marketing Services</a></li>
            <li><a href="#">Learn more</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-section">

        <h2 className='h2-footer'><FaCreditCard />Payment Methods</h2>
        <div className="payment-logos">
          <img src={visa} alt="Visa" width={65} height={40} />
          <img src={master} alt="Mastercard" width={65} height={40}/>
          <img src={paypal} alt="PayPal" width={75}/>
          <img src={bitcoin} alt="Bitcoin" width={65}/>
        </div>
      </div>

       

      {/* <div className='footer-below'>
        <div className=' footer-copyright'>
            <p>
                @{new Date().getFullYear()} All rights reserved.
            </p>
        </div>
        <div className='footer-below-links'>
            <a href="/terms">Terms & Conditions</a>
            <a href="/privacy">Privacy</a>
            <a href="/security">Security</a>
            <a href="/cookie">Cookies</a>
        </div>
      </div> */}
    </footer>
  );
}
  }
    

export default Footer;
import React from 'react';
import '../styles/About.css'; 

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <h2 className='h2-about'>About Our Online Shop</h2>
        <p className='p-about'>
          Our online shop is dedicated to providing you with the best shopping experience. We offer a wide range of products, from electronics to fashion, all at competitive prices.
        </p>
        <h2 className='h2-about'>Our Mission</h2>
        <p className='p-about'>
          Our mission is to make online shopping easy and enjoyable for our customers. We aim to provide high-quality products and exceptional service.
        </p>
        <h2 className='h2-about'>History</h2>
        <p className='p-about'>
          Founded in 2011, our online shop has been serving customers for over a decade. We have evolved and grown to meet the changing needs of our customers.
        </p>
        <h2 className='h2-about'>Values</h2>
        <p className='p-about'>
          At our online shop, we value integrity, customer satisfaction, and innovation. We are committed to providing a secure and pleasant shopping environment for all.
        </p>
        <h2 className='h2-about'>Our Team</h2>
        <p className='p-about'>
          Selma
          Pavithra 
          Didier 
          Illia
        </p>
      </div>
    );
  }
}

export default About;

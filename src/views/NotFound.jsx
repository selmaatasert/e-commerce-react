import React from 'react';
import { Link } from 'react-router-dom'; 
import notFoundImage from '../components/assets/4041.jpg'; 

import '../styles/NotFound.css'; 

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1 className='h1-404'>We looked everywhere.</h1>
        <p className="large-text">Looks like this page is missing.</p>
        <p className="small-text">
          If you still need help, visit our help pages.
        </p>
        <Link to="/" className="home-button">Go to homepage</Link>
        <img src={notFoundImage} alt="Not Found" className="not-found-image" />
      </div>
    );
  }
}

export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import "./slidebar.scss"

export default function SlideBar() {
  return (
    <div  className='poster-div'>
      <Link to="/products" className='poster-collection'>New Collection!</Link>
    </div>
  );
}
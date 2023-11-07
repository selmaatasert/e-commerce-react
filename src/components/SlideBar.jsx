
import { Link } from 'react-router-dom';
import "./SlideBar.scss"

export default function SlideBar() {
  return (
    <div  className='poster-div'>
      <Link to="/products" className='poster-collection'>New Winter Collection!</Link>
    </div>
  );
}

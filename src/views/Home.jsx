// import SlideBar from "../components/SlideBar";
import TopProducts from "../components/TopProducts";
import "../styles/Home.scss";
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="bodyhome">
         <div  className='poster-div'>
      <Link to="/products" className='poster-collection'>New Winter Collection!</Link>
    </div>
     {/* <SlideBar /> */}
      <TopProducts />
    </div>
  );
}

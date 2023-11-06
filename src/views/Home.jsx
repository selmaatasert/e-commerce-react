import SlideBar from "../components/SlideBar";
import TopProducts from "../components/TopProducts";
import "../styles/Home.scss";

export default function Home() {
  return (
    <div className="bodyhome">
      <SlideBar />
      <TopProducts />
    </div>
  );
}

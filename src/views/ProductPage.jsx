import Products from '../components/Products'
import SideBar from '../components/SideBar'
import "./ProductPage.scss"

export default function ProductList() {
  return (
    <div className='product-page-container'>
        <SideBar/>
        <Products/>
    </div>
  )
}

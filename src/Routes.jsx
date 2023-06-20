import {Routes,Route} from "react-router-dom";
import  {Home} from "./pages/Home";
import {Products} from "./pages/Products";
import {ProductDetails} from "./pages/ProductDetails";
export const NavRoutes =()=>{
    return(
        <Routes>
            <Route path ="/" element ={<Home/>} />
            <Route path ="/products" element ={<Products/>} />
            <Route path ="/products/:id" element ={<ProductDetails/>} />
        </Routes>
    )
}
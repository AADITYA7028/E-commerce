import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import ProductCategory from "../product-category/product-category.component";

const Shop = () =>{
    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<ProductCategory/>}/>
        </Routes>
    )
}

export default Shop;
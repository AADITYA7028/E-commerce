import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import ProductCategory from "../product-category/product-category.component";
import { useEffect } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () =>{
    console.log("////shop////")
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("////shopEffect")
        const getCategoriesMap = async () =>{
            const categoriesArray = await getCategoriesAndDocuments();

            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, [])

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<ProductCategory/>}/>
        </Routes>
    )
}

export default Shop;
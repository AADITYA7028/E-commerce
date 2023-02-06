import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setcategoriesMap] = useState({});
    const value = {categoriesMap};
    
    useEffect(() => {
        const getCategoriesMap = async () =>{
            const categoriesMap = await getCategoriesAndDocuments();
            // console.log(categoriesMap);
            setcategoriesMap(categoriesMap);
        }

        getCategoriesMap();
    }, [])
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
} 
import {createContext, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../Utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({children}) => {
const [categoriesMap, setCategoriesMap] = useState({});

useEffect( () => {
    const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        setCategoriesMap(categoryMap);
    }
    getCategoriesMap();
   // addCollectionAndDocuments('categories', SHOP_DATA)
}, []);

const value = {categoriesMap}

return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
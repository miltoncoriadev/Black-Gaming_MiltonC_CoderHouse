import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { addDoc, collection, query, where, getDocs, documentId } from "firebase/firestore";

const useProducts = (filter, filterParam) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {

        const getProducts = async () => {
            setIsLoading(true);
            const productsArray = [];
            let productsCollection;

            if (filter && filterParam) {
                productsCollection = query(collection(db, "collectionProducts"), where(filter === "id" ? documentId() : filter, "==", filterParam));
            } else {
                productsCollection = query(collection(db, "collectionProducts"));
            }

            const productsSnapshot = await getDocs(productsCollection);
            productsSnapshot.forEach((product) => {
                productsArray.push({ ...product.data(), id: product.id });
            });

            setProducts(productsArray);
            setIsLoading(false);
        };
        getProducts();

    }, [filter, filterParam]);

    return { products, isLoading };
};

export default useProducts;

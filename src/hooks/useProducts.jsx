import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = (url) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios(url).then((res) => setProducts(res.data));
    }, []);

    return { products };
};

export default useProducts;

import { useEffect, useState } from "react";
import axios from "axios";

const useProducts = (url) => {
    const [products, stateProducts] = useState([]);

    useEffect(() => {
        axios(url).then((res) => stateProducts(res.data));
    }, []);

    return { products };
};

export default useProducts;

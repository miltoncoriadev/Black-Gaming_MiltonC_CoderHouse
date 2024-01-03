import React from "react";
import { useParams } from "react-router-dom";

// * Configurations
import { useNavigate } from "react-router-dom";

// * Components
import CardDetail from '../../components/CardDetail/CardDetail'

const DetailPage = () => {
    const { idProducto } = useParams();

    return (
        <div>
            <CardDetail id={idProducto}/>
        </div>
    );
};

export default DetailPage;

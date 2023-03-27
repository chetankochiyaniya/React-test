import { useParams } from "react-router";
import React from 'react';

const Product =()=>{
    const { id } = useParams();
    return <><h1>Product : {id}</h1></>
}
export default Product;
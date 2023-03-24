import { useParams } from "react-router";

const Product =()=>{
    const { id } = useParams();
    return <><h1>Product : {id}</h1></>
}
export default Product;
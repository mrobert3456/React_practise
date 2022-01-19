import { useParams } from "react-router-dom";

const ProductDetail =()=>{
    const params =useParams(); //key-value pairs with the dynamic segments wich define a page

    console.log(params.productId);
    return <section>
        <h1>Product detail</h1>
    </section>
};

export default ProductDetail;
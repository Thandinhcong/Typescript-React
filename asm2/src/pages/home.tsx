import Product from "../components/product";
import { useState, useEffect } from "react";
import { Iproduct } from "../interfaces/Product";
import axios from "axios";
const HomeFage = () => {
    const [products, setProduct] = useState<Iproduct[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8082/api/products")
            .then(({ data }) => setProduct(data.products))
    }, [])
    return <div>
        <h2 className="p-5">ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
        <div className="row row-cols-4 p-5">
            {products.map(product => <Product
                data={product}
                key={product.id}
            />)}

        </div>
    </div>
}
export default HomeFage;
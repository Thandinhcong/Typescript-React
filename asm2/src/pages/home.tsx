import Product from "../components/products/product";
import { useState, useEffect } from "react";
import { Iproduct } from "../interfaces/Product";
import axios from "axios";
import Slider from "../components/layout/slider";
import MenuHome from "../components/layout/navbar";
const HomeFage = () => {
    const [products, setProduct] = useState<Iproduct[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/products")
            .then(({ data }) => {
                setProduct(data.products)
            })

    }, [])
    return <div className="">
        <MenuHome />
        <hr />
        <Slider />
        <div className="d-flex">
            <h2 className="p-3 fw-semibold">ĐIỆN THOẠI NỔI BẬT NHẤT</h2>
            <p className="cate-phone mt-3 ">
                <a className="btn  btn-primary" href="">Iphone</a>
                <a className="btn  btn-primary" href="">Apple</a>
                <a className="btn btn-primary" href="">Sam Sung</a>
                <a className="btn btn-primary" href="">Xaomi</a>
            </p>
        </div>
        <div className="list-product row row-cols-5 ">
            {products.map(product => <Product
                data={product}
                key={product._id}
            />)}

        </div>
    </div>
}
export default HomeFage;
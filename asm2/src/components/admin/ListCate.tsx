import { useState, useEffect } from "react"
import { Iproduct } from "../../interfaces/Product";
import axios from "axios";
import { ICategory } from "../../interfaces/category";

const ListCate = () => {
    const [products, setProducts] = useState<Iproduct[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>('');

    useEffect(() => {
        axios.get("http://localhost:8082/api/categorys")
            .then(({ data }) => {
                setCategories(data.categorys);
            });
    }, [])

    useEffect(() => {
        axios.get(`http://localhost:8082/api/products?category=${selectedCategory}`)
            .then(({ data }) => {
                setProducts(data.products);
            });
    }, [selectedCategory])

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCategory(event.target.value);
    }

    return <div className="col-9 pt-5">
        <h3>Điện thoại</h3>
        <div>
            <div className="d-flex gap-3 mb-5">
                <p className="mt-4">Bộ lọc :</p>
                <div>
                    <p>Danh mục sản phẩm</p>
                    <select name="" id="" className="form-select" onChange={handleCategoryChange}>
                        <option value="">--Danh mục sản phẩm--</option>
                        {categories.map((category) => (<option key={category._id} value={category._id}>{category.name}</option>))}
                    </select>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Thành tiền</th>
                        <th>Mô tả</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td> {product.price} </td>
                                <td> {product.description}</td>
                                <td></td>
                                <td>
                                    <button className="btn btn-primary me-2">Xóa</button>
                                    <button className="btn btn-primary">Sửa</button>
                                </td>
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
}

export default ListCate;

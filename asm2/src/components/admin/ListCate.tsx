import { useState, useEffect } from "react"
import { Iproduct } from "../../interfaces/Product";
import axios from "axios";
import { ICategory } from "../../interfaces/category";
import { Link } from "react-router-dom";

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
    const handleDeleteProduct = (id: number | string) => {
        axios.delete(`http://localhost:8082/api/products/${id}`)
            .then(() => {
                const confilm = window.confirm("Bạn có muốn xóa không ?");
                if (confilm) {
                    const newData = products.filter((product) => product._id !== id);
                    setCategories(newData);
                    alert("Xóa sản phẩm thành công !")
                }
            })
    }
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectedCategory(category);

        axios.get(`http://localhost:8082/api/products?category=${category}`)
            .then(({ data }) => {
                setProducts(data.products);
            });
    }

    return <div className="col-10 pt-5">
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
            <table className="table table-bordered table-responsive" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Gia tiền</th>
                        <th>Giá gốc</th>
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
                                <td>{product.original_price}</td>
                                <td> {product.description}</td>

                                <td>
                                    <button className="btn btn-primary me-2" onClick={() => handleDeleteProduct(product._id)}>Xóa</button>
                                    <Link to={`/admin/update-product/${product._id}`} className="btn btn-primary">Sửa</Link>
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

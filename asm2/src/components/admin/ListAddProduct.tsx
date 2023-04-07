import { Link } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";
import AdminCate from "../layout/adminCate";
import AddProduct from "../products/add-product";

const ListAddProduct = () => {
    return (
        <div className="container-xxl">
            <HeaderAdmin />

            <div className="">
                <Link to='/admin' className="fs-2 text-danger ">Trở lại</Link>
                <AddProduct />
            </div>
        </div>
    )
}
export default ListAddProduct;
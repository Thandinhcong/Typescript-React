
import ListUpdateProduct from "../products/ListUpdate";
import HeaderAdmin from "../layout/HeaderAdmin";
import AdminCate from "../layout/adminCate";
import { Link, Outlet } from "react-router-dom";

const UpdateProduct = () => {
    return (
        <div>
            <HeaderAdmin />
            <div className="">
                <Link to="/admin" className="fs-2 text-danger ">Trở lại</Link>
                <Outlet />
                <ListUpdateProduct />
            </div>
        </div>
    )
}
export default UpdateProduct;
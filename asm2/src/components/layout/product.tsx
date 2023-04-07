import HeaderAdmin from "./HeaderAdmin";
import ListCate from "../admin/ListCate";
import AdminCate from "./adminCate";
import { Outlet } from "react-router-dom";

const AdminProduct = () => {
    return <div className="container-xxl bordered">
        <HeaderAdmin />
        <Outlet />
        <div className="row row-cols-2">
            <AdminCate />
            <ListCate />
        </div>
    </div>
}
export default AdminProduct;
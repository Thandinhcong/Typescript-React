import HeaderAdmin from "./HeaderAdmin";
import ListCate from "./ListCate";
import AdminCate from "./adminCate";

const AdminProduct = () => {
    return <div className="container-xxl">
        <HeaderAdmin />
        <div className="row row-cols-2">
            <AdminCate />
            <ListCate />
        </div>
    </div>
}
export default AdminProduct;
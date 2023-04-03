import HeaderAdmin from "./HeaderAdmin";
// import ListCate from "./ListCate";
import ListUser from "./ListUser";
import AdminCate from "./adminCate";

const ListUserAdmin = () => {
    return <div>
        <HeaderAdmin />
        <div className="row row-cols-2">
            <AdminCate />
            <ListUser />
        </div>
    </div>
}
export default ListUserAdmin;
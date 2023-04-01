import { Outlet } from "react-router-dom";
import Header from "./Header";
import Slider from "./sllider";
const UserLayout = () => {
    return <div>

        <Header />
        <Slider />
        <Outlet />
    </div>
}
export default UserLayout;
import HeaderFage from "./header";
import { Outlet } from "react-router-dom"
import Footer from "./footer";
import BankIng from "./banking";
const Layout = () => {
    return <div className="container-xxl">
        <HeaderFage />
        <Outlet />
        <BankIng />
        <Footer />
    </div>
}
export default Layout;
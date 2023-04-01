import HeaderFage from "./header";
import { Outlet } from "react-router-dom"
import Slider from "./slider";
import Footer from "./footer";
const Layout = () => {
    return <div className="container-xl">
        <HeaderFage />
        <Slider />
        <Outlet />
        <Footer />
    </div>
}
export default Layout;
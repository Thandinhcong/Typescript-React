import Menu from "./Menu";
import DelTailProduct from "./deltail-product";
import Footer from "./footer";
import HeaderFage from "./header";
import { Outlet } from "react-router-dom";
const MainDeltailProduct = () => {
    return (
        <div className="container-fluid">
            <HeaderFage />
            <Menu />
            <Outlet />
            <DelTailProduct />
            <Footer />
        </div>

    )
}
export default MainDeltailProduct;
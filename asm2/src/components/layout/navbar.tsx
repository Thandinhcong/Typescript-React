import { Link, Outlet } from "react-router-dom";
const MenuHome = () => {
    return <nav className="navbar navbar-expand-lg bg-body-tertiary fs-5">
        <div className="container-fluid">
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="#">
                            Điện thoại
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            Laptop
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">
                            Đồng hồ
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to="#">Phụ kiện</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to={"#"}>Các dịch vụ tiện ích</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link " to={"#"}>Liên hệ</Link>
                    </li>
                </ul>
            </div>
        </div>
        <Outlet />
    </nav>


}
export default MenuHome;
import { Link } from "react-router-dom";
const Menu = () => {
    return <div className="menu">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mt-2 " style={{ marginLeft: "285px" }}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Trang chủ</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link " aria-current="page" to="#">Điện thoại</Link>
                        <Link className="nav-link" to="#">Samsung</Link>
                        <Link className="nav-link" to="#">Samsung Galaxy A73 (5G) 256GB</Link>
                    </div>
                </div>
            </div>
        </nav>
        <hr />
    </div>

}
export default Menu;
import { Link } from "react-router-dom";
const HeaderFage = () => {
    return <header >
        <div className=" bg-danger align-items-center d-flex" style={{ height: "100px" }} >
            <Link to="/"> <img src="./thantran.png" width={50} alt="logo" style={{ marginRight: "100px", marginLeft: "200px" }} /></Link>
            <input type="text" placeholder="Search" style={{ width: "768px", marginRight: "200px" }} className="form-control flex-fill g-col-6" />
            <Link to="/signin" className="btn btn-primary ms-3">Signin</Link>
            <Link to="/signup" className="btn btn-primary ms-3" style={{ marginRight: "30px" }}>Signup</Link>
        </div>
    </header>
}
export default HeaderFage;
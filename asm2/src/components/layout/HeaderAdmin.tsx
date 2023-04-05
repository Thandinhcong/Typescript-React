import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../../interfaces/User";
const HeaderAdmin = () => {
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        axios.get("http://localhost:8082/api/users")
            .then(({ data }) => setUser(data.users))
    }, [])
    return <div className="row row-cols-2  bg-primary">
        <div className="d-flex  align-items-center">
            <Link to="/"><img src="/thantran.png" alt="" width={50} className="ms-3 me-4" /></Link>
            <p className=" text-light me-5 mt-2">Disboard</p>
            <input type="text" placeholder="Tìm kiếm ..." className="form-control" />
        </div>
        <p className=" text-light mt-2 d-flex  justify-content-center">Xin chào { }  <span className="login-status online"></span></p>

    </div>
}
export default HeaderAdmin;
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const LayOutAdmin = () => {
    const user = JSON.parse(localStorage.getItem("user") as string);
    const navigate = useNavigate();
    useEffect(() => {
        if (user && user.role !== "admin") {
            alert("Bạn không thể truy cập vào trang này")
            return navigate("/")
        }
    }, [navigate])
    return (
        <div>
            <Outlet />
        </div>
    )
}
export default LayOutAdmin;


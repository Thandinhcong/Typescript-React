import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";

const ListUser = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8082/api/users")
            .then(({ data }) => {
                setUsers(data)
                console.log(data)
            })
        // console.log(data);

    }, [])
    return <div className="col-9 pt-5">
        <h3>Tài khoản người dùng</h3>
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên tài khoản</th>
                        <th>email</th>
                        <th>Mật khẩu</th>
                        <th>role</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td>1233</td>
                                <td>
                                    <button className="btn btn-primary me-2">Xóa</button>
                                    <button className="btn btn-primary">Sửa</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
}
export default ListUser;
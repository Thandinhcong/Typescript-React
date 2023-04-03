import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";

const ListUser = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8082/api/users")
            .then(({ data }) => {

                setUsers(data.users);
                console.log(data);
            })
        // console.log(data);

    }, [])
    return <div className="col-10 pt-5">
        <h3>Tài khoản người dùng</h3>
        <div>
            <table className="table table-bordered" style={{ overflow: "auto" }}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên tài khoản</th>
                        <th>email</th>
                        <th>Mật khẩu</th>
                        <th>Vai trò</th>
                        <th>Thao tác</th>
                        <th style={{ overflow: "auto" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button className="btn btn-primary me-2">Xóa</button>
                                    <button className="btn btn-primary">Sửa</button>
                                </td>
                                <td style={{ overflow: "auto" }}></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
}
export default ListUser;
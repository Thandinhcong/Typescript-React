import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../../interfaces/User";

const ListUser = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/users")
            .then(({ data }) => {

                setUsers(data.users);
                console.log(data);
            })
        // console.log(data);
    }, [])
    const handleDeleteUser = (id: string | number) => {
        axios.delete(`http://localhost:8080/api/users/${id}`)
            .then((response) => {
                // Xóa user khỏi state
                const confilm = window.confirm("Bạn có muốn xóa không ?")
                if (confilm) {
                    const newData = users.filter((user) => user._id !== id)
                    setUsers(newData);
                    console.log(response.data);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return <div className="col-10 pt-5 ">
        <h3>Tài khoản người dùng</h3>
        <div className="table-responsive">
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên tài khoản</th>
                        <th>email</th>
                        <th>Mật khẩu</th>
                        <th>Vai trò</th>
                        <th>Thao tác</th>

                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => handleDeleteUser(user._id as string | number)} className="btn btn-primary me-2">Xóa</button>
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
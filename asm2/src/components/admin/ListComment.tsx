import { Outlet, Link } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";
import { useEffect, useState } from "react";
import { IComment } from "../../interfaces/comment";
import axios from "axios";
import AdminCate from "../layout/adminCate";
const ListComment = () => {
    const [comments, setComment] = useState<IComment[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8082/api/comments")
            .then(({ data }) => {
                setComment(data.comments)
            })
    }, [])
    const handleDeleteCmt = (id: string | number) => {
        axios.delete(`http://localhost:8082/api/comments/${id}`)
            .then(() => {
                const confilm = window.confirm("bạn có muốn xóa không ?")
                if (confilm) {
                    const newData = comments.filter((item) => item._id !== id)
                    setComment(newData)
                }
            })
    }
    return <div className="container-xxl">
        <HeaderAdmin />
        <div className=" row row-cols-2">
            <Outlet />
            <AdminCate />
            <div className="col-10 mt-5">
                <h5>Danh sách bình luận</h5>
                <table className="table table-bordered table-responsive" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>context</th>
                            <th>user bình luận</th>
                            <th>Sản phẩm bình luận</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((item, index) => {
                            return <tr
                                key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.description}</td>
                                <td> {item.userId} </td>
                                <td>{item.productId}</td>
                                <td>
                                    <button className="btn btn-primary me-2" onClick={() => handleDeleteCmt(item._id)}>Xóa</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default ListComment;
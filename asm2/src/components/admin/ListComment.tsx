import { Outlet, Link } from "react-router-dom";
import HeaderAdmin from "../layout/HeaderAdmin";
import { useState } from "react";
import { IComment } from "../../interfaces/comment";

const ListComment = () => {
    const [comments, setComment] = useState<IComment[]>([]);
    return <div className="container-xxl">
        <HeaderAdmin />
        <div className=" row row-cols-2">
            <Outlet />
            <Link to='/admin' className="fs-2 text-danger col-2">Trở lại</Link>
            <div className="col-10">
                <h5>Danh sách bình luận</h5>
                <table className="table table-bordered table-responsive" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>context</th>
                            <th>user bình luận</th>
                            <th>Thời gian bình luận</th>
                            <th>Sản phẩm bình luận</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr key={product._id}>
                                <td>{index + 1}</td>
                                <td>{product.name}</td>
                                <td> {product.price} </td>
                                <td>{product.original_price}</td>
                                <td> {product.description}</td>
                                <td>{product.salient_features}</td>
                                <td>
                                    <button className="btn btn-primary me-2" onClick={() => handleDeleteProduct(product._id)}>Xóa</button>
                                </td>
                            </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}
export default ListComment;
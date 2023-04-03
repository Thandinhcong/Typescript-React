const ListCate = () => {
    return <div className="col-9 pt-5">
        <h3>Điện thoại</h3>
        <div>
            <div className="d-flex gap-3 mb-5">
                <p className="mt-4">Bộ lọc :</p>
                <div>
                    <p>Danh mục sản phẩm</p>
                    <select name="" id="" className="form-select">
                        <option value="">--Danh mục sản phẩm--</option>
                        <option value="">Điện thoại</option>
                        <option value="">Máy tính</option>
                        <option value="">Laptop</option>
                        <option value="">ÂM thanh</option>
                    </select>
                </div>
            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tên sản phẩm</th>
                        <th>Thành tiền</th>
                        <th>Mô tả</th>
                        <th>Ânr hiện</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>iPhone</td>
                        <td>10000000</td>
                        <td>hahahahahahhhhhhhhhhhhhhhhhhhh</td>
                        <td></td>
                        <td>
                            <button className="btn btn-primary me-2">Xóa</button>
                            <button className="btn btn-primary">Sửa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
}
export default ListCate;
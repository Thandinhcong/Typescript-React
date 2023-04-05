import { useState } from "react";

const ListUpdateProduct = () => {
    const [product, setProduct] = useState({});


    return <div className="row row-cols-2 pt-4 container col-10 border p-2 bg-body">
        <div className="col-4">
            <h5>Cập nhật sản phẩm</h5>
            <img src="https://salt.tikicdn.com/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg" alt="" width={200} />
            <hr />
            <p>Mô tả ngắn: Chúng ta vẫn biết rằng, làm việc với một đoạn văn bản dễ đọc và rõ nghĩa dễ gây rối trí và cản trở việc tập trung vào yếu tố trình bày văn bản. </p>
            <hr />
        </div>
        <div className="col-8">
            <form action="">
                <h5>Thông tin sản phẩm</h5>
                <label htmlFor="">Tên sản phẩm</label>
                <input type="text" className="form-control mb-3" />
                <div className="row row-cols-2 ">
                    <div>
                        <label htmlFor="">Giá gốc</label>
                        <input type="number" className="form-control mb-3" />
                    </div>
                    <div>
                        <label htmlFor="">Giá khuyến mãi</label>
                        <input type="number" className="form-control mb-3" />
                    </div>
                    <div>
                        <label htmlFor="">Danh mục</label>
                        <select name="" id="" className="form-select mb-3">
                            <option value="">Laptop</option>
                            <option value="">Máy tính</option>
                            <option value="">Điện thoại</option>
                        </select>
                    </div>
                </div>
                <label htmlFor="">Đặc điểm nổi bật</label>
                <textarea name="" id="" className="form-control mb-3"></textarea>
                <label htmlFor="">Mô tả dài</label>
                <textarea name="" id="" className="form-control mb-3"></textarea>
                <button className="btn btn-danger">Thêm mới</button>
            </form>
        </div>
    </div>
}
export default ListUpdateProduct;
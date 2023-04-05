import { useForm } from "react-hook-form";
const AddProduct = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    return (
        <div className="col-10">
            <h5 className="mt-5">Thêm mới sản phẩm</h5>
            <form action="" className="row row-cols-2" >
                <div className="col-4">
                    <label htmlFor="" className="mb-2 mt-5">Thêm ảnh</label>
                    <input type="file" className="form-control" id="product-img" />
                </div>
                <div className="col-8">
                    <h5>Thông tin sản phẩm</h5>
                    <label htmlFor="" className="mb-3">Tên sản phẩm</label>
                    <input type="text" className="form-control" placeholder="Nhập tên sản phẩm" />
                    <div className="row row-cols-2" >
                        <div>
                            <label htmlFor="" className="mb-2 mt-3">Giá gốc</label>
                            <input type="text" className="form-control" placeholder="Nhập giá gốc sản phẩm" />
                        </div>
                        <div>
                            <label htmlFor="" className="mb-2 mt-3">Giá khuyến mãi</label>
                            <input type="text" className="form-control" placeholder="Nhập giá khuyến mãi" />
                        </div>
                        <div>
                            <label htmlFor="" className="mt-3 mb-3">Danh mục</label>
                            <select name="" id="" className="form-select">
                                <option value="">Điện thoại</option>
                                <option value="">Điện thoại</option>
                                <option value="">Điện thoại</option>
                            </select>
                        </div>
                    </div>
                    <label htmlFor="" className="mt-2 mb-3">Mô tả ngắn</label>
                    <textarea name="" id="" className="form-control" placeholder="Nhập mô tả sản phẩm"></textarea>
                    <label htmlFor="" className="mt-2 mb-3" placeholder="Nhập mô tả sản phẩm">Mô tả dài</label>
                    <textarea name="" id="" className="form-control"></textarea>
                    <button className="btn btn-primary mt-3">Thêm mới</button>
                </div>

            </form >
        </div >
    )

}
export default AddProduct;
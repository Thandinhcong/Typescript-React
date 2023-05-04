import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { addForm, addSchema } from "../../interfaces/Product";
import { UploadImage, addProduct } from "../../api/product";
import { useEffect, useState } from "react";
import { ICategory } from "../../interfaces/category";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const navigate = useNavigate();
    const [categorys, setCategory] = useState<ICategory[]>([]);
    const [image, setImage] = useState<any>(null);
    useEffect(() => {
        axios.get("http://localhost:8080/api/categorys")
            .then(({ data }) => {
                setCategory(data.categorys);
            });
    }, [])
    const { register, handleSubmit, formState: { errors } } = useForm<addForm>({
        resolver: yupResolver(addSchema)
    })
    const handleOnSubmit = async (product: addForm) => {
        if (typeof image !== "string") {
            return;
        }
        product.image = image;
        try {
            const response = await addProduct(product);
            console.log("response:", response);

            alert("Thêm sản phẩm thành công")
            navigate("/admin");
        } catch (error) {
            alert("Bạn không thể thêm sản phẩm !")
        }

    }
    const onChangeFile = async (e: any) => {
        const files = e.target.files[0];
        console.log("file", files);
        if (files) {
            try {
                console.log(files);
                const Res = await UploadImage({
                    file: files,
                    upload_preset: "demo-upload",
                });
                console.log("rwess", Res);
                if (Res) {
                    setImage(Res.data.url);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    console.log("image", image);
    return (
        <div className="col-10">
            <h5 className="mt-5">Thêm mới sản phẩm</h5>
            <form action="" className="row row-cols-2" onSubmit={handleSubmit(handleOnSubmit)}>
                <div className="col-4">
                    <label htmlFor="" className="mb-2 mt-5">Thêm ảnh</label>
                    <input
                        type="file"
                        className="form-control"
                        id="product-img"
                        onChange={onChangeFile}
                    />
                </div>
                <div className="col-8">
                    <h5>Thông tin sản phẩm</h5>
                    <label htmlFor="" className="mb-3">Tên sản phẩm</label>
                    <input type="text"
                        className="form-control"
                        placeholder="Nhập tên sản phẩm"
                        {...register("name")}
                    />
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.name && errors.name.message}
                    </p>
                    <div className="row row-cols-2" >
                        <div>
                            <label htmlFor="" className="mb-2 mt-3">Giá gốc</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập giá gốc sản phẩm"
                                    {...register("original_price")}
                                />
                                <p className=" text-danger" style={{ fontSize: "10px" }}>
                                    {errors.original_price && errors.original_price.message}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="mb-2 mt-3">Giá khuyến mãi</label>
                            <div>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập giá khuyến mãi"
                                    {...register("price")}
                                />
                                <p className=" text-danger" style={{ fontSize: "10px" }}>
                                    {errors.price && errors.price.message}
                                </p>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="" className="mt-3 mb-3">Danh mục</label>
                            <select className="form-select" {...register("categoryId")}>
                                <option value="">Vui lòng chọn danh mục</option>
                                {categorys.map((e) => (
                                    <option key={e._id} value={e._id}>{e.name}</option>
                                ))}
                            </select>
                            <p className=" text-danger" style={{ fontSize: "10px" }}>
                                {errors.categoryId && errors.categoryId.message}
                            </p>
                        </div>
                    </div>
                    <label htmlFor="" className="mt-2 mb-3">Mô tả</label>
                    <textarea className="form-control"   {...register("description")} placeholder="Nhập mô tả sản phẩm"></textarea>
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.description && errors.description.message}
                    </p>
                    <label className="mt-2 mb-3" placeholder="Nhập mô tả sản phẩm">Mô tả dài</label>
                    <textarea className="form-control"    {...register("salient_features")}></textarea>
                    <p className=" text-danger" style={{ fontSize: "10px" }}>
                        {errors.salient_features && errors.salient_features.message}
                    </p>
                    <button className="btn btn-primary mt-3">Thêm mới</button>
                </div>

            </form >
        </div >
    )

}
export default AddProduct;
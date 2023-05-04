
import { Link } from "react-router-dom";
import { Iproduct } from "../../interfaces/Product";
type Props = {
    data: Iproduct
}
const Product = ({ data }: Props) => {
    return <div className="products">
        <p className=" products-item bg-danger">Sale 20%</p>
        <Link to={`product/${data._id}`}><img src={data.image} alt="" /></Link>
        <div className="infoProduct mb-4">
            <Link to={`/product/${data._id}`} className="text-decoration-none text-dark"><p className=" g-col-4 mb-3 ">{data.name}</p></Link>
            <span className="text-danger  mb-5">{data.price}đ</span> <span className="mb-5 text-decoration-line-through ms-2">{data.original_price}đ</span> <br />
            <span className="text-warning fs-5 ">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
            <div className="d-flex justify-content-end me-2 mt-2">
                <span className="text-secondary">Yêu thích  </span><span className="material-symbols-outlined text-danger">
                    favorite
                </span>
            </div>
        </div>

    </div>
}
export default Product;
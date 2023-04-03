import { Link } from "react-router-dom";

const DelTailProduct = () => {
    return <div className="">
        <h3 style={{ marginLeft: "300px" }} className="mb-5">Samsung Galaxy A73 (5G) 256GB</h3>
        <section className="container row row-cols-2">
            <img src="./samsung.png" alt="product" className="row-cols-4" />
            <section className="row-cols-8 ">
                <span className="fs-4 text-danger">11.690.000 đ</span> <span className="text-decoration-line-through text-secondary">12.999.000đ</span>
                <p className="mt-5"> Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế. </p>
            </section>
        </section>
        <section className=" row row-cols-2 p-5">
            <section className="deltail-product-img mt-5">
                <section className="icon-img1 ">
                    <Link to="#" className="text-decoration-none">
                        <img src="https://img.icons8.com/ios/50/null/filled-star.png" />
                        <p className="mt-3">Tính năng nổi bật</p>
                    </Link>
                </section>
                <img className="icon-img" src="/samsung.png" alt="" />
                <img className="icon-img" src="/samsung.png" alt="" />
                <img className="icon-img" src="/samsung.png" alt="" />
                <img className="icon-img" src="/samsung.png" alt="" />
            </section>
            <section className="cart">
                <Link to="/cart"> <button className="btn btn-danger text-light">Mua ngay</button></Link>
                <section className="cart-item">
                    <Link to="/cart" className="text-decoration-none" ><span className="material-symbols-outlined text-danger">shopping_cart</span></Link>
                    <p>Thêm vào <br /> giỏ hàng</p>
                </section>
            </section>
        </section>
        <section className=" border bg-dark-subtle  p-5">
            <h3 className="text-danger  ">ĐẶC ĐIỂM NỔI BẬT</h3>
            <p>Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với cảm biến chính lên đến 108 MP</p>
            <p>Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch, độ phân giải Full HD+, 120Hz mượt mà</p>
            <p>Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon 778G, RAM lên đến 8 GB</p>
            <p>Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh, hỗ trợ sạc nhanh 25 W</p>
        </section>
        <section className="p-5">
            <p>Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!</p>
            <h4>Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp</h4>
            <p>Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc</p>
        </section>
        <section className="p-5">
            <h4>Thiết kế sang trọng, màn hình Super AMOLED</h4>
            <p>Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.</p>
            <p>Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.</p>
            <p>Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.</p>
        </section>
        <button type="submit" className="btn tbn-light border" style={{ marginLeft: "500px", width: 300 }}>Xem thêm</button>
    </div>
}
export default DelTailProduct;
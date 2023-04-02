const DeltailCart = () => {
    return (
        <div>
            <section>
                <div>
                    <p>Gọi mua hàng</p>
                    <p>1800 2222</p>
                </div>
                <div>
                    <span className="material-symbols-outlined">pin_drop</span>
                    <p>Cửa hàng gần bạn</p>
                </div>
                <div>
                    <span className="material-symbols-outlined">local_shipping</span>
                    <p>Tra cứu đơn hàng</p>
                </div>
                <div>
                    <span className="material-symbols-outlined">shopping_cart</span>
                    <p>giỏ hàng</p>
                </div>
            </section>
            <section>
                <span className="material-symbols-outlined">arrow_back_ios</span> <span>Trở về</span>
                <p>Giỏ hàng</p>
            </section>
            <section>
                <img src="./samsung.png" alt="" />
                <section>
                    <h6>Samsung Galaxy S22-Đen</h6>
                    <p className="text-danger">16.000.00Đ</p><span className="text-decoration-line-through">21.999.999</span>
                    <p className="btn btn-danger">Giam 27%</p>
                    <span>Số lượng <input type="number" min={0} max={1000} step={1} /></span>
                    <p>- Chương trình khuyến mại:</p>
                    <p>Dịch vụ phòng chờ hạng thương gia tại sân bay</p>
                    <p>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</p>
                </section>
            </section>
            <img src="/Vector.png" alt="" />
            <section>
                <p>Tổng tiền tạm tính</p> <p>17.000.000đ</p>
                <button className="btn btn-danger">
                    Tiến hành đặt hàng
                </button>
                <button className="border">Chọn thêm sản phẩm khác</button>
            </section>
        </div>
    )
}
export default DeltailCart;
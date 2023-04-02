const HeaderAdmin = () => {
    return <div className="row row-cols-2  bg-primary">
        <div className="d-flex  align-items-center">
            <img src="/thantran.png" alt="" width={50} className="ms-3 me-4" />
            <p className=" text-light me-5 mt-2">Disboard</p>
            <input type="text" placeholder="Tìm kiếm ..." className="form-control" />
        </div>
        <p className=" text-light mt-2 d-flex  justify-content-center">Xin chào Thản trần</p>
    </div>
}
export default HeaderAdmin;
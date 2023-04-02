const HeaderFage = () => {
    return <header >
        <div className=" bg-danger align-items-center d-flex" style={{ height: "100px" }} >
            <a href="/"> <img src="./thantran.png" width={50} alt="logo" style={{ marginRight: "100px", marginLeft: "200px" }} /></a>
            <input type="text" placeholder="Search" style={{ width: "768px", marginRight: "200px" }} className="form-control flex-fill g-col-6" />
            <a href="/signin" className="btn btn-primary ms-3">Signin</a>
            <a href="/signup" className="btn btn-primary ms-3" style={{ marginRight: "30px" }}>Signup</a>
        </div>
    </header>
}
export default HeaderFage;
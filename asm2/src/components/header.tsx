const HeaderFage = () => {
    return <header >
        <div className=" bg-danger align-items-center d-flex" style={{ height: "100px" }} >
            <a href="/"> <img src="./thantran.png" width={50} alt="logo" style={{ marginRight: "124px", marginLeft: "304px" }} /></a>
            <input type="text" placeholder="Search" style={{ width: "768px", marginRight: "267px" }} className="form-control flex-fill g-col-6" />
        </div>
    </header>
}
export default HeaderFage;
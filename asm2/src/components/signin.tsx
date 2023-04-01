const Signin = () => {
    return (
        <div className="signin container row ">
            <div className="form-signin col-8">
                <form action="">
                    <label htmlFor="form-label">Email</label>
                    <input type="text" placeholder="Nhập email.." className="form-control" />
                    <label htmlFor="form-label">Password</label>
                    <input type="password" placeholder="Pasword.." className="form-control" />
                    <button className="btn btn-primary form-control mt-4">Đăng kí</button>
                </form>
                <h5 className="mt-3">Hoặc đăng nhập bằng</h5>
                <div className="icon mt-3">

                    <a href="#"><img src="https://img.icons8.com/fluency/48/null/facebook-new.png" /></a>
                    <a href="#"><img src="https://img.icons8.com/cute-clipart/64/null/google-logo.png" /></a>
                </div>
            </div>
            <div className="logo col-4">
                <a href="/"><img src="./thantran.png" alt="" /></a>
            </div>
        </div>
    )
}
export default Signin;
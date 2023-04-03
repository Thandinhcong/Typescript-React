import { Link } from "react-router-dom";
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

                    <Link to="#"><img src="https://img.icons8.com/fluency/48/null/facebook-new.png" /></Link>
                    <Link to="#"><img src="https://img.icons8.com/cute-clipart/64/null/google-logo.png" /></Link>
                </div>
            </div>
            <div className="logo col-4">
                <Link to="/"><img src="./thantran.png" alt="" /></Link>
            </div>
        </div>
    )
}
export default Signin;
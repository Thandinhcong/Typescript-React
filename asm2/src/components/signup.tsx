import axios from "axios";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/User";
import { Link, useHistory } from 'react-router-dom';
const Signup = () => {
    const [user, setUser] = useState<IUser[]>([]);
    useEffect(() => {
        axios.post("http://localhost:8082/api/users")
            .then(({ data }) => setUser(data))
    }, [])
    const handleSignup = () => {
        const formSignin = document.querySelector("#form-signin");
        const userEmail = document.querySelector("#email");
        const password = document.querySelector("#password");
        const confilmPasword = document.querySelector('#resPass');
        formSignin?.addEventListener("submit", function (e) {
            e.preventDefault();
            const newData = {
                userEmail: userEmail,
                password: password,
                confilmPasword: confilmPasword,
            }
            axios.post("http://localhost:8082/api/users", newData)
                .then(() => {
                    history.push('/sigin')
                    alert("Đăng kí thành công");
                })
        })
    }
    return (
        <div className="signin container row ">
            <div className="form-signin col-8">
                <form action="" id="from-user">
                    <label htmlFor="form-label">Email</label>
                    <input type="text" placeholder="Nhập email.." id="email" className="form-control" />
                    <label htmlFor="form-label">Password</label>
                    <input type="password" placeholder="Pasword.." id="password" className="form-control" />
                    <label htmlFor="form-label">Confilm Password</label>
                    <input type="password" placeholder="Pasword.." id="resPass" className="form-control" />
                    <button onClick={handleSignup} className="btn btn-primary form-control mt-4">Đăng kí</button>
                </form>
                <h5 className="mt-3">Hoặc đăng nhập bằng</h5>
                <div className="icon mt-3">

                    <a href="#"><img src="https://img.icons8.com/fluency/48/null/facebook-new.png" /></a>
                    <a href="#"><img src="https://img.icons8.com/cute-clipart/64/null/google-logo.png" /></a>
                </div>
            </div>
            <div className="logo col-4">
                <Link to="/"><img src="./thantran.png" alt="" /></Link>
            </div>
        </div>
    )
}
export default Signup;
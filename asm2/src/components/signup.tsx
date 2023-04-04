import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Joi from "joi";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: [] }).required(),
        number: Joi.number().min(9).required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
    });

    const handleSignup = (event: any) => {
        event.preventDefault();

        const validation = schema.validate({ name, email, number, password, confirmPassword });

        if (validation.error) {
            alert(validation.error);
            // Xử lý lỗi ở đây, ví dụ hiển thị thông báo cho người dùng
            return;
        }
        axios.get(`http://localhost:8082/api/check-email/${email}`)
            .then((response) => {
                if (response.data.exists) {
                    alert('Email đã tồn tại');
                    return;
                }

                fetch('http://localhost:8082/api/signup', {
                    method: 'POST',
                    body: JSON.stringify({
                        name,
                        email,
                        number,
                        password,
                        confirmPassword,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        navigate("/signin")
                        alert("Đăng kí thành công")
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return (
        <div className="signin container row ">
            <div className="signin container row">
                <div className="form-signin col-8">
                    <form action="" id="from-user">
                        <label htmlFor="form-label">Tên</label>
                        <input
                            type="text"
                            placeholder="Nhập tên.."
                            id="name"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                        <label htmlFor="form-label">Email</label>
                        <input
                            type="text"
                            placeholder="Nhập email.."
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                        <label htmlFor="form-label">Điện thoại</label>
                        <input
                            type="text"
                            placeholder="phone number..."
                            id="phone"
                            className="form-control"
                            value={number}
                            onChange={(event) => setPhone(event.target.value)}
                        />
                        <label htmlFor="form-label">Mật khẩu</label>
                        <input
                            type="password"
                            placeholder="Password.."
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <label htmlFor="form-label">Confilm Password</label>
                        <input
                            type="password"
                            placeholder="Pasword.."
                            id="resPass"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                        />
                        <button
                            className="btn btn-primary form-control mt-4"
                            type="submit"
                            onClick={handleSignup}
                        >
                            Đăng kí
                        </button>
                    </form>
                    <h5 className="mt-3">Hoặc đăng nhập bằng</h5>
                    <div className="icon mt-3">
                        <a href="#">
                            <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" />
                        </a>
                        <a href="#">
                            <img src="https://img.icons8.com/cute-clipart/64/null/google-logo.png" />
                        </a>
                    </div>
                </div>
                <div className="logo col-4">
                    <Link to="/">
                        <img src="./thantran.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Signup;
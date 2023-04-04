import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8082/api/signin', {
                email,
                password,
            });

            if (response.data.isAdmin) {
                // Đăng nhập với quyền admin
                navigate("/admin")
                alert("Đăng nhập admin thành công !")
            } else {
                // Đăng nhập với quyền user
                navigate("/")
                alert("Đăng nhập thành công")
            }
        } catch (error) {
            alert("Thông tin tài khoản mật khẩu không chính xác !")
        }
    };

    return (
        <div className="signin container row ">
            <div className="form-signin col-8">
                <h2 className="ms-4">Chào mừng đến với đăng nhập</h2>
                <form onSubmit={handleSignIn}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        placeholder="Nhập email.."
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        placeholder="Pasword.."
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn-primary form-control mt-4">Đăng Nhập</button>
                </form>
                <h5 className="mt-3">Hoặc đăng nhập bằng</h5>
                <div className="icon mt-3">
                    <Link to="#">
                        <img src="https://img.icons8.com/fluency/48/null/facebook-new.png" />
                    </Link>
                    <Link to="#">
                        <img src="https://img.icons8.com/cute-clipart/64/null/google-logo.png" />
                    </Link>
                </div>
            </div>
            <div className="logo col-4">
                <Link to="/">
                    <img src="./thantran.png" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default SignIn;

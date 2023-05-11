import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from "axios";
interface User {
    name: string;
}

const HeaderPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loggedIn, setLoggedIn] = useState<User | null>(() => {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    });
    useEffect(() => {
        axios.get('http://localhost:8080/api/products')
            .then(res => {
                setProducts(res.data.products);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const handleSearch = () => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    //log out
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        setLoggedIn(null);
    };

    return (
        <header>
            <div className=" bg-danger align-items-center d-flex" style={{ height: "100px" }}>
                <Link to="/"> <img src="../logo.png" width={50} alt="logo" style={{ marginRight: "50px", marginLeft: "50px" }} /></Link>
                <span className="material-symbols-outlined fs-1 text-light">
                    phone_in_talk
                </span>
                <p className='text-light fs-5 me-5 mt-3'> 05238920562</p>
                <div>
                    <Input.Search
                        placeholder="Search for products..."
                        enterButton={<SearchOutlined />}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onSearch={handleSearch}
                    />
                    <ul>
                        {filteredProducts.map(product => (
                            <a href={product.id} className='search-results'><li key={product.id}>{product.name}</li></a>
                        ))}
                    </ul>
                </div>
                {loggedIn ? (
                    <>
                        <div className="text-white me-3 ms-5">Xin chào : {loggedIn.name}</div>
                        <button onClick={handleLogout} className="btn btn-primary ms-3 " style={{ marginRight: "30px" }} > Logout</button>
                        <span style={{ marginRight: "5px" }} className="material-symbols-outlined fs-1 text-light">
                            shopping_cart
                        </span>
                    </>
                ) : (
                    <>
                        <Link to="/signin" className="btn btn-primary ms-5">Signin</Link>
                        <Link to="/signup" className="btn btn-primary ms-3" style={{ marginRight: "30px" }}>Signup</Link>
                        <span style={{ marginRight: "100px" }} className="material-symbols-outlined fs-1 text-light">
                            shopping_cart
                        </span>
                    </>
                )}
            </div>
        </header >
    );
}

export default HeaderPage;

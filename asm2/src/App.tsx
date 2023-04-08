
import { Route, Routes, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFage from "./pages/home";
import Layout from "./components/layout/layout";
import Signup from "./components/users/signup";
import Signin from "./components/users/signin";
import Cart from "./pages/cart";
import AdminProduct from "./components/layout/product";
import ListUserAdmin from "./components/admin/users";
import DelTailProduct from "./components/products/deltail-product";
import UpdateProduct from "./components/admin/updateProduct";
import ListAddProduct from "./components/admin/ListAddProduct";
import LayOutAdmin from "./components/layout/LayOutAdmin";
import ListComment from "./components/admin/ListComment";
function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeFage />} />
        <Route path="/product/:id" element={<DelTailProduct />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<LayOutAdmin />} >
        <Route index element={<AdminProduct />} />
        <Route path="user" element={<ListUserAdmin />} />
        <Route path="update-product/:id" element={<UpdateProduct />} />
        <Route path="add-product" element={<ListAddProduct />} />
        <Route path="danh-sach-binh-luan" element={<ListComment />} />
      </Route>
    </Routes>
  </BrowserRouter>

}

export default App


import { Route, Routes, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFage from "./pages/home";
import Layout from "./components/layout";
import Signup from "./components/signup";
import Signin from "./components/signin";
import MainDeltailProduct from "./components/main-deltail-product";
import Cart from "./pages/cart";
import AdminProduct from "./components/admin/product";
import ListUserAdmin from "./components/admin/users";
function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeFage />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/deltail-product" element={<MainDeltailProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<AdminProduct />} />
      <Route path="/user" element={<ListUserAdmin />} />
    </Routes>
  </BrowserRouter>

}

export default App


import { Route, Routes, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFage from "./pages/home";
import Layout from "./components/layout";
import Signup from "./components/signup";
import Signin from "./components/signin";
import MainDeltailProduct from "./components/main-deltail-product";
function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeFage />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />\
      <Route path="/deltail-product" element={<MainDeltailProduct />} />
    </Routes>
  </BrowserRouter>

}

export default App

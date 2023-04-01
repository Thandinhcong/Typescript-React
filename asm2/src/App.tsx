
import { Route, Routes, BrowserRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeFage from "./pages/home";
import Layout from "./components/layout";
function App() {

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeFage />} />
      </Route>
    </Routes>
  </BrowserRouter>

}

export default App

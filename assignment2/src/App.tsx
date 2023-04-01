// import { useState } from 'react'
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import UserLayout from "./components/UserLayout";
import Home from "./pages/Home";
// import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout />}>
        <Route index path="/" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>

}

export default App

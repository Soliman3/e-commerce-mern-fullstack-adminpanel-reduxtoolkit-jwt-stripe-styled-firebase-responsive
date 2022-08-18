import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import CategoryProductList from './pages/CategoryProductList'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state)=> state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryProductList />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={user? <Home/> :<Login />} />
        <Route path="/register" element={user? <Home/> :<Register />} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

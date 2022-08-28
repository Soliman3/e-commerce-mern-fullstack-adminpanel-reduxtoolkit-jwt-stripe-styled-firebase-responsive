import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import CategoryProductList from './pages/CategoryProductList';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { RedirectRoute } from "./utils/PrivateRoutes";
import Page404 from "./pages/Page404";

function App() {
  const user = useSelector((state) => state.user.currentUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<CategoryProductList />} />
        <Route path="/product/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/*" element={<Page404/>} />
        <Route element={<RedirectRoute/>}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

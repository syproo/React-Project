import "./App.css";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Products } from "./Pages/Products";
import { Signup } from "./Pages/Signup";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { useCart } from "./Context/CartContext";

function App() {
  const { cartItemCount } = useCart();

  return (
    <>
      <Navbar cartItemCount={cartItemCount()} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;

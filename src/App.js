import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
// import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;

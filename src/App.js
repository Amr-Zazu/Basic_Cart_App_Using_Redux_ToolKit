import { Route, Routes } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import { AuthProvider } from "./components/auth";
import Cart from "./components/cart/Cart";
import Login from "./components/Login";
import Products from "./components/products/Products";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;

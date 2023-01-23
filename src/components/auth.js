import { useState, createContext, useContext } from "react";
import { useSelector } from "react-redux";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const cart = useSelector((state) => state.cart);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    cart.length = 0;
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // 1. Check if user is already logged in when the app starts
  useEffect(() => {
    const storedToken = localStorage.getItem("adminToken");
    const storedAdmin = localStorage.getItem("adminData");

    if (storedToken && storedAdmin) {
      setUser({ token: storedToken, ...JSON.parse(storedAdmin) });
    }
    setLoading(false);
  }, []);

  // 2. Login Function (Call this from Login.jsx)
  const login = (token, adminData) => {
    localStorage.setItem("adminToken", token);
    localStorage.setItem("adminData", JSON.stringify(adminData));
    setUser({ token, ...adminData });
    navigate("/dashboard");
  };

  // 3. Logout Function (Call this from Dashboard)
  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminData");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
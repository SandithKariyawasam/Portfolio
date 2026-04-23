import "./App.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/style.css";

import ThreeBackground from "./component/background/ThreeBackground";
import CustomCursor from "./component/cursor/CustomCursor";
import Preloader from "./component/Preloader";
import { useEffect, useState } from "react";

import Home from "./pages/home";
import About from "./pages/about";
import Credentials from "./pages/credentials";
import Works from "./pages/works";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import Service from "./pages/service";
import Workdetails from "./pages/work-details";
import Blogdetails from "./pages/blog-details";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Header from "./component/header";
import Footer from "./component/footer";

import PrivateRoute from "./component/PrivateRoute";

import Dashboard from "./dashboard/dashboard"

import { Routes, Route, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake delay — simulate data fetching or app initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:8070//api/data")
  //     .then((res) => res.json())
  //     .then(() => setLoading(false));
  // }, []);

  // hide footer on login + any dashboard route
  const hideFooter =
    location.pathname === "/login" || location.pathname.startsWith("/dashboard");

  // List of paths where footer should be hidden
  const hideHeaderPaths = ["/dashboard", "/page1", "/page2", "/page3", "/page4", "/page5"];

  // hide header on any dashboard route
  const hideHeader = location.pathname.startsWith("/dashboard");


  return (
    <>
      {loading ? <Preloader /> :
        <><ThreeBackground />{!hideHeader && <CustomCursor />}<AuthProvider>
          {!hideHeader && <Header />}
          <main className="main-homepage">
            <Routes>
              <Route path="/" element={<Home />} />
              {loading ? <Preloader /> : <Route path="/about" element={<About />} />}
              {loading ? <Preloader /> : <Route path="/credentials" element={<Credentials />} />}
              {loading ? <Preloader /> : <Route path="/works" element={<Works />} />}
              {loading ? <Preloader /> : <Route path="/blog" element={<Blog />} />}
              {loading ? <Preloader /> : <Route path="/login" element={<Login />} />}
              {loading ? <Preloader /> : <Route path="/abcdefghijklmn" element={<Register />} />}
              {loading ? <Preloader /> : <Route path="/contact" element={<Contact />} />}
              {loading ? <Preloader /> : <Route path="/service" element={<Service />} />}
              {loading ? <Preloader /> : <Route path="/work-details/:id" element={<Workdetails />} />}
              {loading ? <Preloader /> : <Route path="/blog-details/:id" element={<Blogdetails />} />}

              <Route path="/dashboard/*" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
            </Routes>
          </main>
          {!hideFooter && <Footer />}
        </AuthProvider></>}
    </>
  );
}

export default App;

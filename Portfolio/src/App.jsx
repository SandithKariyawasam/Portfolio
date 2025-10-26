import "./App.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/aos.css";
import "../src/assets/css/style.css";

import ThreeBackground from "./component/ThreeBackground";

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
import Header from "./component/header";
import Footer from "./component/footer";

import PrivateRoute from "./component/PrivateRoute";

import Dashboard from "./dashboard/dashboard"

import { Routes, Route, useLocation } from "react-router-dom";
import { AuthContext, AuthProvider } from "./context/AuthContext";

function App() {
  const location = useLocation();

  // hide footer on login + any dashboard route
  const hideFooter =
    location.pathname === "/login" || location.pathname.startsWith("/dashboard");

  // List of paths where footer should be hidden
  const hideHeaderPaths = ["/dashboard", "/page1", "/page2", "/page3", "/page4", "/page5"];

  // hide header on any dashboard route
  const hideHeader = location.pathname.startsWith("/dashboard");


  return (
    <>
      <ThreeBackground />
      <AuthProvider>
        {!hideHeader && <Header />}
        <main className="main-homepage">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/credentials" element={<Credentials />} />
            <Route path="/works" element={<Works />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            <Route path="/work-details" element={<Workdetails />} />
            <Route path="/blog-details" element={<Blogdetails />} />

            <Route path="/dashboard/*" element={<PrivateRoute> <Dashboard /> </PrivateRoute>} />
          </Routes>
        </main>
        {!hideFooter && <Footer />}
      </AuthProvider>
    </>
  );
}

export default App;

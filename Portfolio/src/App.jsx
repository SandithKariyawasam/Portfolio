
import './App.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/aos.css'
import '../src/assets/css/style.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'


import Home from './pages/home'
import About from './pages/about'
import Credentials from './pages/credentials'
import Works from './pages/works'
import Blog from './pages/blog'
import Contact from './pages/contact'
import Service from './pages/service'
import Workdetails from './pages/work-details'
import Blogdetails from './pages/blog-details'
import Header from './component/header'
import Footer from './component/footer'

function App() {
  return (
    <Router>
      <Header />
      <main className="main-homepage">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/works" element={<Works />} />
          <Route path="/blog" element={<Blog/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='/work-details' element={<Workdetails/>}/>
          <Route path='/blog-details' element={<Blogdetails/>}/>
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
